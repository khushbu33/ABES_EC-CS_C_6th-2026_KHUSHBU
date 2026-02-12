import fs from 'fs/promises';

const appendFile=async(path,data)=>{   
        try{
await fs.append
File(path,data);
console.log("data hve been appended successfully");
        }
        catch(err){
            console.log("unable to append data",err);
        }   
}
appendFile("./example.txt","\nThis is appended data through async");