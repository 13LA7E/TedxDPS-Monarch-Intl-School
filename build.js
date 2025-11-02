const fs = require('fs');
const path = require('path');

// Generate a timestamp-based version for cache busting
const version = Date.now();

console.log('🔄 Updating cache-busting version...');

// List of HTML files to update
const htmlFiles = [
  'index.html',
  'about.html',
  'talks.html',
  'team.html',
  'apply.html',
  'contact.html'
];

// Process each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update CSS link with version parameter
    content = content.replace(
      /href="\.\/assets\/css\/styles\.css(\?v=\d+)?"/g,
      `href="./assets/css/styles.css?v=${version}"`
    );
    
    // Update JS script with version parameter
    content = content.replace(
      /src="\.\/assets\/js\/main\.js(\?v=\d+)?"/g,
      `src="./assets/js/main.js?v=${version}"`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log(`✨ Cache-busting version updated: ${version}`);
console.log('🎉 All files processed successfully!');
