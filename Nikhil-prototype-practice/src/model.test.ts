import { describe, expect, it } from 'vitest';
import { initialJourney, loadJourney, monthlyTotal, patchSetup, planErrors, recommend, requestText, STORAGE_KEY, workspaceErrors } from './model';

describe('recommendations and eligibility',()=>{
  it('suggests a managed small-team plan without requiring Enterprise Cloud',()=>{
    const j=initialJourney();
    expect(recommend(j).plan).toBe('business');
    expect(recommend({...j,hasCloud:true,needsControls:true}).plan).toBe('enterprise');
    expect(recommend({...j,audience:'solo'}).plan).toBe('pro');
  });
  it('does not treat company controls alone as Enterprise eligibility',()=>{
    const j={...initialJourney(),needsControls:true,plan:'enterprise' as const};
    expect(recommend(j).plan).toBe('business');
    expect(planErrors(j)).toContain('Enterprise needs an Enterprise Cloud account. Review the requirement or choose Business.');
  });
  it('keeps individual subscriptions separate from managed team seats',()=>{
    expect(planErrors({...initialJourney(),plan:'pro'})).toContain('Individual plans do not provide managed team seats. Choose a team plan or change to Just me.');
    expect(planErrors({...initialJourney(),audience:'solo',plan:'business'})).toContain('A managed team plan needs an organization. Change to My team first.');
  });
});

describe('costs, editing, and recovery',()=>{
  it('estimates billed seats rather than team size or assigned identities',()=>{
    const j={...initialJourney(),teamSize:9,seats:2,assigned:['you'],plan:'business' as const};
    expect(monthlyTotal(j)).toBe(38);
    expect(monthlyTotal({...j,audience:'solo',plan:'pro'})).toBe(10);
    expect(monthlyTotal({...j,assigned:['you','maya']})).toBe(38);
  });
  it('prevents oversubscribed seats and out-of-scope team sizes',()=>{
    expect(planErrors({...initialJourney(),seats:1,assigned:['you','maya'],plan:'business'})).toContain('Unassign a demo teammate before reducing billed seats.');
    expect(workspaceErrors({...initialJourney(),teamSize:10})).not.toHaveLength(0);
    expect(workspaceErrors({...initialJourney(),orgName:'bad name'})).not.toHaveLength(0);
  });
  it('revokes old confirmation when one material answer changes without losing the rest',()=>{
    const j={...initialJourney(),plan:'business' as const,setupConfirmed:true,permissionsReviewed:true,assigned:['you','maya'],taskPhase:'complete' as const,firstValueAt:123};
    const edited=patchSetup(j,{seats:2});
    expect(edited.orgName).toBe(j.orgName);
    expect(edited.assigned).toEqual(['you','maya']);
    expect(edited.setupConfirmed).toBe(false);
    expect(edited.permissionsReviewed).toBe(false);
    expect(edited.firstValueAt).toBeNull();
  });
  it('allows the access review acknowledgment to be set',()=>{
    expect(patchSetup(initialJourney(),{permissionsReviewed:true}).permissionsReviewed).toBe(true);
  });
  it('recovers from corrupt saved data and interrupted scripted examples',()=>{
    expect(loadJourney({getItem:()=>'{broken'})).toEqual(initialJourney());
    expect(loadJourney({getItem:()=>JSON.stringify({...initialJourney(),plan:'not-real'})})).toEqual(initialJourney());
    const storage={getItem:(key:string)=>key===STORAGE_KEY?JSON.stringify({...initialJourney(),step:4,taskPhase:'running'}):null};
    expect(loadJourney(storage).taskPhase).toBe('idle');
  });
  it('keeps the approval draft explicitly unsent',()=>{
    expect(requestText({...initialJourney(),plan:'business'})).toContain('no request has been sent');
  });
});
