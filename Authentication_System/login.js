import { readJsonFile } from "./services/fileService.js";

const FILE = "./data/users.json";

const login = async (email, password) => {
    const users = await readJsonFile(FILE);

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return console.log("Invalid credentials ❌");
    }

    console.log("Login successful ✅");
};

login("khush@gmail.com", "12345");
