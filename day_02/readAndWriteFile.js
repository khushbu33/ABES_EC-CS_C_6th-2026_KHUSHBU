import fs, { read } from 'fs';
import { data } from 'react-router-dom';
const writeFileSync =(pata,data)=>{
    try{
        fs.writeFileSync(pata,data);
        console.log("File written successfully");
    }
    catch(err){
        console.log("Error writing file: " + err);
    }
}
const readFileSync =(path)=>{
    try{
        const data = fs.readFileSync(path,'utf-8');
        console.log("File read successfully: " + data);
    }
    catch(err){
        console.log("Error reading file: ");
    }
}
readFileSync('./example.txt');
// writeFileSync('..example.txt','This is an example text file.');
// writeFileSync('..example.txt','This is an example text file.');
// writeFileSync('./example.txt','This is an example text file.');
