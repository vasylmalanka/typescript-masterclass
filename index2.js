"use strict";
class RegistredUser {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
