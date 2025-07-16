// Simple script to help debug Vercel deployment
const fs = require('fs');
const path = require('path');

// Log the build start
console.log('Starting custom Vercel build script...');

// Define the output directory where Angular builds to
const outputDir = 'dist/da-thuong/browser';

// Check if the output directory exists
if (!fs.existsSync(outputDir)) {
    console.error(`Output directory ${outputDir} does not exist. Build may have failed.`);
    process.exit(1);
}

// Log the list of files in the output directory
console.log('Files in output directory:');
const files = fs.readdirSync(outputDir);
console.log(files);

// Check if index.html exists
if (!files.includes('index.html')) {
    console.error('index.html not found in output directory!');
    process.exit(1);
}

// Read the index.html file to check its content
const indexPath = path.join(outputDir, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Check if the index.html file has content
if (!indexContent || indexContent.trim().length === 0) {
    console.error('index.html exists but is empty!');
    process.exit(1);
}

// Check if the output directory has JavaScript files (Angular bundles)
const hasJsFiles = files.some(file => file.endsWith('.js'));
if (!hasJsFiles) {
    console.error('No JavaScript files found in output directory. Build may be incomplete.');
    process.exit(1);
}

// Add noindex meta tag for development/staging environments if needed
// This is useful if you have a staging site that you don't want indexed by search engines
if (process.env.VERCEL_ENV !== 'production') {
    console.log('Adding noindex meta tag for non-production environment');
    const updatedContent = indexContent.replace(
        /<head>/,
        '<head>\n    <meta name="robots" content="noindex, nofollow">'
    );
    fs.writeFileSync(indexPath, updatedContent);
}

// Make sure all routes get directed to index.html (for SPA support)
console.log('Build completed successfully!');
