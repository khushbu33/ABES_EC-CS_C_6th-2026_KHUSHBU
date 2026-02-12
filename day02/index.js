import {appendFileSync} from './readAndwrite1.js';

console.log("Appending data to before read file...");
readFileSync("\..example.txt")
console.log("Appending data to  after read file...");
console,log("before write file...");    
writeFileSync('./example.txt','This is new data');
console.log("after write file...");
conso
appendFileSync('./example.txt','\nThis is appended data');
readFileSync('./example.txt');
writeFileSync('./example.txt','This is new data');