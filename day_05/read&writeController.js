import { readJsonFile, writeJsonFile } from "./readAndwriteServices.js";

const filePath = "./data.json";

const newData = {
    name: "Khushi",
    course: "Full Stack"
};

const main = async () => {
    await writeJsonFile(filePath, newData);
    const data = await readJsonFile(filePath);
    console.log(data);
};

main();

//using student.json file read write data in student1.json file,try to read data from student1.json file and print it in console. Handle error if any.
const main1 = async () => {
    const data = await readJsonFile("./student.json");
    console.log(data);
    await writeJsonFile("./student1.json", data);
    try{
        const newData = await readJsonFile("./student1.json");
        console.log(newData);
    }
    catch(err){
        console.log("error in reading student1.json file",err);
    }
};  
main1();




  

// import { readJsonFile } from './readAndwriteServices.js';

// export const readFile = async (path) => {
//     try {
//         const data = await readJsonFile(path);
//         console.log(data);
//     }
//     catch (err) {
//         console.log("error in reading file", err);
//     }
// };

