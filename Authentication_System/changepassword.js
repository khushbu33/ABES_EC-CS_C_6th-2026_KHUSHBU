import { readJsonFile, writeJsonFile } from "./services/fileService.js";

const FILE = "./data/users.json";

const changePassword = async (email, oldPassword, newPassword) => {
    const users = await readJsonFile(FILE);

    const user = users.find(
        user => user.email === email && user.password === oldPassword
    );

    if (!user) {
        return console.log("Invalid email or password ❌");
    }

    user.password = newPassword;

    await writeJsonFile(FILE, users);

    console.log("Password changed successfully ✅");
};

changePassword("khush@gmail.com", "12345", "67890");
