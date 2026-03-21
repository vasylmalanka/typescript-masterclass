import { AdminUser } from "./user.js";

const userAdmin = new AdminUser();
console.log(userAdmin.createUser('Bob'));
userAdmin.showGreeting();
