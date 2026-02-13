// import { read } from 'fs';
// import fs from 'fs/promises'

// export const readJsonFile=async(path)=>{
//     let data=[];
//     let message=[];
//     try{
//         const data=await fs.readFile(path,"utf-8");
//         data=return JSON.parse(data);
//     }
//     catch(err){
//         console.log("unable to read file",err);
//         message=throw err;
//     }
// const readJsonFile=async(path)=>{
//     try{
//         const data=await fs.readFile(path,"utf-8");
//         return JSON.parse(data);

//     }
//     catch(err){
//         console.log("unable to read file",err);
//     }
// }
// // const writeJsonFile=async(path,data)=>{
//     try{
//         await fs.writeFile(path,JSON.stringify(data));
//         console.log("file written successfully");
//     }
//     catch(err){
//         console.log("unable to write file",err);
//     }
 // }
// readJsonFile("./student.json").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("error in reading file",err);
// });
// export {readJsonFile};
// writeJsonFile("./student1.json",[{"name":"khush","age":21}]);
import fs from "fs/promises";

export const readJsonFile = async (path) => {
    const data = await fs.readFile(path, "utf-8");
    return JSON.parse(data);
};

export const writeJsonFile = async (path, data) => {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
};

