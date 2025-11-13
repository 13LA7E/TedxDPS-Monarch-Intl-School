const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${inputPath}`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let converted = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      converted += await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const success = await convertToWebP(fullPath, outputPath);
      if (success) {
        converted++;
        // Delete original after successful conversion
        fs.unlinkSync(fullPath);
      }
    }
  }
  
  return converted;
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  console.log('Starting WebP conversion...\n');
  
  const total = await processDirectory(publicDir);
  
  console.log(`\n✅ Conversion complete! ${total} images converted to WebP format.`);
}

main();
