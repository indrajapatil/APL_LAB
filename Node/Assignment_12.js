// Assignment_fs.js

import * as fs from 'fs';

fs.writeFile('example.txt', 'This is Node.js callback file system demo.', (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
    return;
  }
  console.log('✅ File written successfully!');

  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading file:', err);
      return;
    }
    console.log('📄 File content:', data);
  });
});
