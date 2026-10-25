const fs = require('fs')

const code = fs.readFileSync('server.js', 'utf8')

if (!code.includes('My docker Test')) {
    console.error('FAIL: message not found in server.js');
    process.exit(1);

}

console.log('PASS: message found');
process.exit(0)