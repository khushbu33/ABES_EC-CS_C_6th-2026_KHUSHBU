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

