import type { CSSProperties } from 'react';

export type IconName = 'copilot' | 'github' | 'check' | 'chevron' | 'close' | 'code' | 'team' | 'person' | 'shield' | 'sparkle' | 'book' | 'help' | 'reset' | 'external' | 'edit' | 'lock' | 'folder' | 'branch' | 'clock' | 'info' | 'copy' | 'plus' | 'minus' | 'sun' | 'grid' | 'terminal';
const paths: Record<IconName, React.ReactNode> = {
  copilot: <><path d="M7 9 6 5l4-2h4l4 2-1 4M4 11V9l3-2m13 4V9l-3-2M5 11c-2 0-3 1-3 3s1 3 3 3m14-6c2 0 3 1 3 3s-1 3-3 3M5 10h14v7l-4 3H9l-4-3z"/><rect x="7" y="11" width="4" height="4" rx="1"/><rect x="13" y="11" width="4" height="4" rx="1"/></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.5-.5-2 3.5-.4 7-1.7 7-7A5.5 5.5 0 0 0 20 5c.2-1 .2-2-.4-3-2 0-3 1-4 1.5a14 14 0 0 0-7 0C7.5 3 6.5 2 4.5 2c-.6 1-.6 2-.4 3A5.5 5.5 0 0 0 2.5 9c0 5.3 3.5 6.6 7 7-.6.5-.6 1-.5 2v4"/></>,
  check:<path d="m5 12 4 4L19 6"/>, chevron:<path d="m9 5 7 7-7 7"/>, close:<path d="m6 6 12 12M6 18 18 6"/>,
  code:<><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"/></>,
  team:<><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-16a3 3 0 0 1 0 6m2 4a6 6 0 0 1 2 4v2"/></>,
  person:<><circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/></>,
  shield:<><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z"/><path d="m8 12 3 3 5-6"/></>,
  sparkle:<><path d="m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8zM20 2v4m-2-2h4"/></>,
  book:<><path d="M12 5v16M3 3c5 0 7 1 9 3 2-2 4-3 9-3v16c-5 0-7 0-9 2-2-2-4-2-9-2z"/></>,
  help:<><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4m0 4v.1"/></>,
  reset:<><path d="M3 11a9 9 0 1 1 3 8M3 4v7h7"/></>,
  external:<><path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-6"/></>, edit:<><path d="m15 4 5 5M3 21l5-1L21 7l-5-5L3 15z"/></>,
  lock:<><rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v3"/></>,
  folder:<path d="M3 5h7l2 3h9v13H3z"/>, branch:<><circle cx="6" cy="4" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="20" r="2"/><path d="M6 6v12m0-4c12 0 12-4 12-6"/></>,
  clock:<><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>, info:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/></>,
  copy:<><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/></>, plus:<path d="M12 5v14M5 12h14"/>, minus:<path d="M5 12h14"/>,
  sun:<><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>,
  grid:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  terminal:<><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 3 3-3 3m6 0h5"/></>,
};
export function Icon({name,size=20,className='',style}: {name:IconName;size?:number;className?:string;style?:CSSProperties}) {
  return <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
