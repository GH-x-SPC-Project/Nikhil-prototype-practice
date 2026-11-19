import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('complete research journeys',()=>{
  it('completes a founder journey with reviewed demo code and distinct milestones',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Start setup'}));
    await user.click(screen.getByRole('button',{name:'See plans'}));
    expect(screen.getByText('$57')).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'Review setup'}));
    await user.click(screen.getByRole('button',{name:'Confirm demo setup'}));
    expect(screen.getByRole('alert')).toHaveTextContent('Review the access details');
    await user.click(screen.getByLabelText('I’ve reviewed this demo setup and access.'));
    await user.click(screen.getByRole('button',{name:'Confirm demo setup'}));
    expect(screen.getByText('Setup complete (simulated)')).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'Run demo task'}));
    const accept=await screen.findByRole('button',{name:'Accept demo change'});
    expect(accept).toBeDisabled();
    await user.click(screen.getByLabelText('I’ve reviewed this example diff.'));
    await user.click(accept);
    await user.click(screen.getByRole('button',{name:'Record demo commit'}));
    expect(screen.getByText('First useful action demonstrated')).toBeInTheDocument();
    expect(screen.getByRole('heading',{name:'Your demo change is reviewed.'})).toBeInTheDocument();
  });
  it('allows plan-first comparison and then requires the workspace details',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Compare plans'}));
    await user.click(screen.getByRole('button',{name:/Compare all plan options/}));
    const dialog=screen.getByRole('dialog');
    await user.click(within(dialog).getByRole('button',{name:'Choose Pro+'}));
    expect(screen.getByText('Copilot Pro+ is selected.')).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'Continue to workspace'}));
    expect(screen.getByRole('heading',{name:'Who’s building with Copilot?'})).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'See plans'}));
    expect(screen.getByText('Copilot Pro+ is selected.')).toBeInTheDocument();
  });
  it('keeps access pending for a member while allowing a sample explanation',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Joining a team? Start here'}));
    await user.click(screen.getByRole('button',{name:'See plans'}));
    await user.click(screen.getByRole('button',{name:'Review access request'}));
    await user.click(screen.getByLabelText('I’ve reviewed this demo setup and access.'));
    await user.click(screen.getByRole('button',{name:'Save demo access request'}));
    expect(screen.getByText('Admin approval pending (simulated)')).toBeInTheDocument();
    expect(screen.queryByText('Setup complete (simulated)')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:/Explain this code/}));
    await user.click(screen.getByRole('button',{name:'Run demo task'}));
    await user.click(await screen.findByRole('button',{name:'Mark explanation understood'}));
    expect(screen.getByText('First useful action demonstrated')).toBeInTheDocument();
    expect(screen.getByText('Admin approval pending (simulated)')).toBeInTheDocument();
  });
  it('edits seats without discarding the organization and revalidates the review',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Start setup'}));
    await user.click(screen.getByRole('button',{name:'See plans'}));
    await user.click(screen.getByRole('button',{name:'Review setup'}));
    await user.click(screen.getByRole('button',{name:'Edit plan'}));
    await user.click(screen.getByRole('button',{name:'Decrease billed seats'}));
    expect(screen.getByText('$38')).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'Review setup'}));
    expect(screen.getByRole('heading',{name:'launchpad-labs'})).toBeInTheDocument();
    expect(screen.getByLabelText('I’ve reviewed this demo setup and access.')).not.toBeChecked();
  });
  it('provides contextual scripted help and closes it with Escape',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Open setup guide'}));
    const dialog=screen.getByRole('dialog');
    expect(dialog).toHaveTextContent('Scripted guide · no live AI');
    await user.type(within(dialog).getByLabelText('Find an answer'),'credits');
    expect(within(dialog).getByText('How do credits and extra usage work?')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('does not advance an invalid newly named organization',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Start setup'}));
    await user.selectOptions(screen.getByLabelText('GitHub workspace'),'new');
    await user.type(screen.getByLabelText('Demo organization name'),'invalid name');
    await user.click(screen.getByRole('button',{name:'See plans'}));
    expect(screen.getByRole('alert')).toHaveTextContent('Use 1–39 letters');
  });
  it('reconfirms team details when an individual evaluator switches to Enterprise',async()=>{
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('button',{name:'Start setup'}));
    await user.click(screen.getByRole('button',{name:/Just me My projects/}));
    await user.click(screen.getByRole('button',{name:'See plans'}));
    await user.click(screen.getByRole('button',{name:/Compare all plan options/}));
    await user.click(within(screen.getByRole('dialog')).getByRole('button',{name:'Choose Enterprise'}));
    await user.click(within(screen.getByRole('dialog')).getByRole('button',{name:'Use a demo Cloud account'}));
    expect(screen.getByRole('button',{name:'Continue to workspace'})).toBeInTheDocument();
    await user.click(screen.getByRole('button',{name:'Continue to workspace'}));
    expect(screen.getByLabelText('People on your team')).toBeInTheDocument();
  });
});
