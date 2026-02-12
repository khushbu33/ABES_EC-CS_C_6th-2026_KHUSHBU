import fs from "fs/promises";

// const makdir = async (path) => {
//     try {
//         await fs.mkdir(path);
//         console.log("directory created successfully");
//     } catch (err) {
//         console.log("unable to create directory", err);
//     }
// }
//mkdir("../day_05");
// makdir("../day_100");


const removeDir = async (path) => {
    try {
        await fs.rmdir(path);
        console.log("directory removed successfully");
    }
    catch (err) {
        console.log("unable to remove directory", err);
    }
}
removeDir("../day_100");


//node day_03/dir.js