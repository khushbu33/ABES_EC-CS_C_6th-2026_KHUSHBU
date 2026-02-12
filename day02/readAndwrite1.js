import  fs from 'fs';
const appendFileSync=(path,data)=>{
    try{
        fs.appendFileSync(path,data);
        console.log("Data appended successfully");
    }
    catch(err){
        console.log("Error appending data: " + err);
    }
}
appendFileSync('./example.txt','\nThis is appended data');