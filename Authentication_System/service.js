import fs from "fs/promises";

export const readJsonFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

export const writeJsonFile = async (path, data) => {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
};
