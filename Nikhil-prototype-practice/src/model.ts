export type PlanId = 'free' | 'student' | 'pro' | 'pro-plus' | 'max' | 'business' | 'enterprise' | 'access';
export type Step = 0 | 1 | 2 | 3 | 4;
export type Intent = 'quick' | 'compare' | 'join';
export type TaskPhase = 'idle' | 'running' | 'review' | 'accepted' | 'complete';

export interface Journey {
  version: 1;
  step: Step;
  furthest: Step;
  workspaceReady: boolean;
  intent: Intent;
  audience: 'solo' | 'team';
  teamSize: number;
  seats: number;
  orgMode: 'existing' | 'new';
  orgName: string;
  role: 'owner' | 'member';
  hasCloud: boolean;
  needsControls: boolean;
  assigned: string[];
  plan: PlanId | null;
  repository: 'launchpad-web' | 'demo-api';
  permissionsReviewed: boolean;
  setupConfirmed: boolean;
  approvalPending: boolean;
  task: 'explain' | 'fix';
  taskPhase: TaskPhase;
  diffReviewed: boolean;
  startedAt: number | null;
  setupAt: number | null;
  firstValueAt: number | null;
}

export const PLAN_SOURCE = 'https://docs.github.com/en/copilot/get-started/plans';
export const PLAN_CHECKED = 'November 18, 2026';

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  kind: 'personal' | 'team' | 'eligibility';
  subtitle: string;
  description: string;
  features: string[];
  usage: string;
  note?: string;
}

export const PLANS: Plan[] = [
  { id: 'free', name: 'Copilot Free', price: 0, kind: 'personal', subtitle: 'A place to try things', description: 'Explore coding assistance on your own.', features: ['Individual access', 'Limited agent usage', 'Automatic model selection'], usage: 'An allowance of AI credits; limited usage.', note: 'Our demo starts from this individual baseline.' },
  { id: 'pro', name: 'Copilot Pro', price: 10, kind: 'personal', subtitle: 'For your own projects', description: 'More room for an individual coding workflow.', features: ['Individual subscription', 'More model choice', 'A monthly AI credit allowance'], usage: '1,000 base credits; current flex allowance may add more.' },
  { id: 'pro-plus', name: 'Copilot Pro+', price: 39, kind: 'personal', subtitle: 'For frequent individual use', description: 'A larger allowance for advanced individual workflows.', features: ['Everything in Pro', 'A larger AI credit allowance', 'Access to premium models'], usage: '3,900 base credits; current flex allowance may add more.' },
  { id: 'max', name: 'Copilot Max', price: 100, kind: 'personal', subtitle: 'For sustained individual use', description: 'The largest standard individual allowance.', features: ['Everything in Pro+', 'Higher individual allowance', 'Priority access to premium models'], usage: '10,000 base credits; current flex allowance may add more.' },
  { id: 'business', name: 'Copilot Business', price: 19, kind: 'team', subtitle: 'For a team that builds together', description: 'Manage Copilot access and policy in one place.', features: ['Central seat management', 'Organization policy controls', '1,900 AI credits per seat'], usage: '1,900 AI credits per granted seat each month.', note: 'The Copilot subscription price; tax and extra usage excluded.' },
  { id: 'enterprise', name: 'Copilot Enterprise', price: 39, kind: 'team', subtitle: 'For an Enterprise Cloud organization', description: 'A larger allowance and additional enterprise capabilities.', features: ['Everything in Business', '3,900 AI credits per seat', 'Enterprise-grade capabilities'], usage: '3,900 AI credits per granted seat each month.', note: 'Requires GitHub Enterprise Cloud, priced separately.' },
  { id: 'student', name: 'Copilot Student', price: 0, kind: 'eligibility', subtitle: 'For verified students', description: 'An eligibility-based individual option.', features: ['Student verification required', 'Automatic model selection', 'Third-party agents excluded'], usage: 'An allowance of AI credits. Verify eligibility with GitHub.' },
  { id: 'access', name: 'Copilot access', price: 0, kind: 'eligibility', subtitle: 'For eligible enterprises', description: 'Metered usage with a separate eligibility model.', features: ['$0 seat charge for licensed Enterprise Cloud users', '$10 for Copilot Standalone users', 'No included AI credit allowance'], usage: 'Usage is billed separately; no included allowance.', note: 'Eligibility must be confirmed with GitHub. This route is explained, not activated in the demo.' },
];

export const TEAM_MEMBERS = [
  { id: 'you', name: 'You', role: 'Demo account', initials: 'YO' },
  { id: 'maya', name: 'Maya', role: 'Demo teammate', initials: 'MA' },
  { id: 'leo', name: 'Leo', role: 'Demo teammate', initials: 'LE' },
  { id: 'jordan', name: 'Jordan', role: 'Demo teammate', initials: 'JO' },
  { id: 'sam', name: 'Sam', role: 'Demo teammate', initials: 'SA' },
  { id: 'alex', name: 'Alex', role: 'Demo teammate', initials: 'AL' },
  { id: 'casey', name: 'Casey', role: 'Demo teammate', initials: 'CA' },
  { id: 'taylor', name: 'Taylor', role: 'Demo teammate', initials: 'TA' },
  { id: 'robin', name: 'Robin', role: 'Demo teammate', initials: 'RO' },
];

export function initialJourney(): Journey {
  return { version: 1, step: 0, furthest: 0, workspaceReady: false, intent: 'quick', audience: 'team', teamSize: 3, seats: 3, orgMode: 'existing', orgName: 'launchpad-labs', role: 'owner', hasCloud: false, needsControls: false, assigned: ['you'], plan: null, repository: 'launchpad-web', permissionsReviewed: false, setupConfirmed: false, approvalPending: false, task: 'fix', taskPhase: 'idle', diffReviewed: false, startedAt: null, setupAt: null, firstValueAt: null };
}

export function getPlan(id: PlanId): Plan { return PLANS.find(p => p.id === id)!; }
export function monthlyTotal(j: Journey): number { return j.plan ? getPlan(j.plan).price * (j.audience === 'team' ? j.seats : 1) : 0; }

export function recommend(j: Journey): { plan: PlanId; reasons: string[] } {
  if (j.audience === 'solo') return { plan: 'pro', reasons: ['You are setting up an individual workflow.', 'You do not need team seat management.', 'Pro adds model choice and included usage above Free.'] };
  if (j.hasCloud && j.needsControls) return { plan: 'enterprise', reasons: ['You selected an existing Enterprise Cloud account.', 'You asked to review company-wide controls.', 'Enterprise includes more credits per seat than Business.'] };
  return { plan: 'business', reasons: [`You are setting up a team of ${j.teamSize}.`, 'You want shared access and seat management.', 'Business does not require an Enterprise Cloud account.'] };
}

export function workspaceErrors(j: Journey): string[] {
  const e: string[] = [];
  if (j.audience === 'team') {
    if (!Number.isInteger(j.teamSize) || j.teamSize < 2 || j.teamSize > 9) e.push('Choose a team size from 2 to 9 for this small-team demo.');
    if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(j.orgName)) e.push('Use 1–39 letters, numbers, or hyphens for the demo organization name. Start and end with a letter or number.');
  }
  return e;
}

export function planErrors(j: Journey): string[] {
  const e: string[] = [];
  if (!j.plan) e.push('Select a plan before continuing.');
  if (j.plan === 'enterprise' && !j.hasCloud) e.push('Enterprise needs an Enterprise Cloud account. Review the requirement or choose Business.');
  if (j.plan && ['student','access'].includes(j.plan)) e.push('This eligibility-based route is informational. Choose a standard demo plan to continue.');
  if (j.plan && j.audience === 'team' && getPlan(j.plan).kind !== 'team') e.push('Individual plans do not provide managed team seats. Choose a team plan or change to Just me.');
  if (j.plan && j.audience === 'solo' && getPlan(j.plan).kind === 'team') e.push('A managed team plan needs an organization. Change to My team first.');
  if (j.audience === 'team' && (!Number.isInteger(j.seats) || j.seats < 1 || j.seats > j.teamSize)) e.push('Billed seats must be between 1 and your team size.');
  if (j.assigned.length > j.seats && j.audience === 'team') e.push('Unassign a demo teammate before reducing billed seats.');
  return e;
}

export function patchSetup(j: Journey, patch: Partial<Journey>): Journey {
  return { ...j, ...patch, permissionsReviewed: patch.permissionsReviewed ?? false, setupConfirmed: false, approvalPending: false, taskPhase: 'idle', diffReviewed: false, setupAt: null, firstValueAt: null };
}

export function navigate(j: Journey, step: Step): Journey { return { ...j, step, furthest: Math.max(j.furthest, step) as Step }; }

export function requestText(j: Journey): string {
  return `Demo access request\nOrganization: ${j.orgName}\nRequested plan: ${j.plan ? getPlan(j.plan).name : 'Not selected'}\nRequested billed seats: ${j.seats}\nExample project: ${j.repository}\nPlease review the plan, pricing, and organization policy before assigning access.\nThis is a student research simulation; no request has been sent.`;
}

export const STORAGE_KEY = 'copilot-express-research-v1';
export function loadJourney(storage: Pick<Storage,'getItem'>): Journey {
  try {
    const value = JSON.parse(storage.getItem(STORAGE_KEY) ?? 'null') as Partial<Journey> | null;
    const valid = value?.version === 1 && [0,1,2,3,4].includes(value.step as number) && ['solo','team'].includes(value.audience as string) && (value.plan === null || PLANS.some(p => p.id === value.plan)) && ['owner','member'].includes(value.role as string) && Number.isInteger(value.teamSize) && Number.isInteger(value.seats) && typeof value.orgName === 'string' && Array.isArray(value.assigned) && value.assigned.every(id => TEAM_MEMBERS.some(m => m.id === id));
    if (!valid) return initialJourney();
    return { ...initialJourney(), ...value, taskPhase: value.taskPhase === 'running' ? 'idle' : value.taskPhase ?? 'idle' };
  } catch { return initialJourney(); }
}
