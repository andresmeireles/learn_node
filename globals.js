console.log('NODE JS GLOBALS');

const dirName = __dirname;
const fileName = __filename;
const moduleName = JSON.stringify(module, 2);
const processInfo = JSON.stringify(process, 2);

console.log(`GLOBAL DIRNAME show the current directory in this case ${dirName}`);
console.log(`FILE NAME SHOW THE CURRENT FILE WHERE THE SCRIPT IS RUNNING IN THIS CASE ${fileName}`);
console.log("REQUIRE - IS A KEYWORD THAT BRING CODE FROM OTHER FILES OR MODEULES");
console.log(`SHOW INFO ABOUT MODULE - ${moduleName}`);
console.log(`SHOW INFO ABOUT YOUR ENVIRONMENT ${processInfo}`);
