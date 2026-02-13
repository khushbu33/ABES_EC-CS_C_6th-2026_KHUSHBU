import { readFileController, writeFileController } from "./controllers/fileController.js";

const filePath = "./data.json";

const newData = {
    name: "Khushi",
    course: "Full Stack"
};

await writeFileController(filePath, newData);
await readFileController(filePath);
