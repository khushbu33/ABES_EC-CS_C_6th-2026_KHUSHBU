import fs from 'fs/promises';
const readDirSync = (path) => {
    fs.readDirSync(path);
}
const makeDirSync = (path) => {
    try {
        fs.mkdirSync(path);
        console.log("directory created successfully");
    }
    catch (err) {
        console.log("unable to create directory", err);
    }
}
const removeDirSync = (path) => {
    try {
        fs.rmdirSync(path);
        console.log("directory removed successfully");
    }
    catch (err) {
        console.log("unable to remove directory", err);
    }       
}
makeDirSync("../day_05");
removeDirSync("../day_100");