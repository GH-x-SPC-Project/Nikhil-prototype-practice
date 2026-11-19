import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const directory = resolve('dist');
let html = await readFile(resolve(directory, 'index.html'), 'utf8');
const script = html.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
const style = html.match(/<link[^>]*href="([^"]+\.css)"[^>]*>/);
if (!script || !style) throw new Error('Expected one bundled JS module and one stylesheet. Run npm run build first.');
const javascript = (await readFile(resolve(directory, script[1].replace(/^\//, '')), 'utf8')).replace(/<\/script/gi, '<\\/script');
const css = (await readFile(resolve(directory, style[1].replace(/^\//, '')), 'utf8')).replace(/<\/style/gi, '<\\/style');
html = html.replace(script[0], () => `<script type="module">${javascript}</script>`).replace(style[0], () => `<style>${css}</style>`);
const output = resolve(directory, 'Copilot-Express-Preview.html');
await writeFile(output, html);
console.log(`Standalone browser preview: ${output}`);
