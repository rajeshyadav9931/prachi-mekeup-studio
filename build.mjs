import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'favicon.svg', 'robots.txt']) await copyFile(name, `dist/${name}`);
await cp('assets', 'dist/assets', { recursive: true });
console.log('Static website built in dist/');
