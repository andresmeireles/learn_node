// nos modulos do proprio node não usamos a notaçao ./ porque isso faz com qu eo node busque na pasta principal e os
// modulos do node estão instalados junto com ele.
const os = require('os');

console.log(os.arch());
console.log(os.homedir());
console.log(os.hostname());
// console.log(os.cpus());
console.log(os.userInfo());
console.warn(os.uptime());
console.log(os.type());
console.log(os.totalmem());
console.log(os.freemem());