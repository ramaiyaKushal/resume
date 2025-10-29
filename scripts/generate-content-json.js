const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'public', 'content');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'content.json');

function readMarkdownFiles(dir, baseDir = dir) {
  const result = {};
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      Object.assign(result, readMarkdownFiles(fullPath, baseDir));
    } else if (item.endsWith('.md')) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const content = fs.readFileSync(fullPath, 'utf8');
      result[relativePath] = content;
    }
  }

  return result;
}

const contentMap = readMarkdownFiles(CONTENT_DIR);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(contentMap, null, 2));

console.log(`Generated content.json with ${Object.keys(contentMap).length} files`);
console.log('Files included:', Object.keys(contentMap).join(', '));
