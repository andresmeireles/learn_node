const path = require('path');

console.log(path.sep);

// normaliza o caminho de arquivos, precisa ter o primeiro parametro informado corretamente.
const filePath = path.join('/folder', 'subfolder', 'text.txt');
console.log(filePath);

console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'text.txt');
const absolute2 = path.join(__dirname, 'folder', 'subfolder', 'text.txt');
console.log(absolute);
console.log(absolute2);