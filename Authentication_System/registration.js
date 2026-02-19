import { readJsonFile, writeJsonFile } from "./services/fileService.js";

const FILE = "./data/users.json";

const register = async (id, name, email, password, gender) => {
    const users = await readJsonFile(FILE);

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return console.log("Email already registered ❌");
    }

    const newUser = { id, name, email, password, gender };

    users.push(newUser);

    await writeJsonFile(FILE, users);

    console.log("User registered successfully ✅");
};

register(1, "Khushbu", "khush@gmail.com", "12345", "female");
