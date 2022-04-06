const {readFileSync, writeFileSync} = require('fs');
const os = require('os');

// read files
const first = readFileSync(__dirname + '/folder/first.txt', 'utf-8');
const second = readFileSync(__dirname + '/folder/second.txt', 'utf8');

console.log(first, second);

// write files
const date = new Date();
writeFileSync(
    __dirname + '/folder/result-sync.txt',
    `New text with content of first file ${first} and second ${second} at ${date.toTimeString()}`
);
// by default node clear file content to write new one, to change this behavior change de default flag
writeFileSync(
    __dirname + '/folder/result-sync-append.txt',
    `New text with content of first file ${first} and second ${second} at ${date.toTimeString()}${os.EOL}`,
    {flag: 'a'} // flag a is for append
);