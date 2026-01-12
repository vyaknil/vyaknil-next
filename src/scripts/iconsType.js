const fs = require('fs');
const path = require('path');

function extractIconIds(svgContent) {
  const regex = /<symbol id="([^"]+)"/g;
  const ids = [];
  let match;
  
  while ((match = regex.exec(svgContent)) !== null) {
    ids.push(match[1]);
  }
  
  return ids;
}

function createIconsType(iconIds) {
  const typeName = 'Icons';
  const typeItems = iconIds.map(id => `  "${id}"`).join(' |\n');
  
  return `export type ${typeName} =\n${typeItems};`;
}

const filePath = path.join(__dirname, "../", "components/",'svgSprite.tsx');
const svgContent = fs.readFileSync(filePath, 'utf8');

const iconIds = extractIconIds(svgContent);
const iconsType = createIconsType(iconIds);

const outputPath = path.join(__dirname, "../", "types/", 'icons.types.ts');
fs.writeFileSync(outputPath, iconsType, 'utf8');

console.log(`✅ ${iconIds.length}`);
console.log(`📁 ${outputPath}`);
console.log('\nIDs:');
iconIds.forEach((id, index) => {
  console.log(`  ${index + 1}. ${id}`);
});