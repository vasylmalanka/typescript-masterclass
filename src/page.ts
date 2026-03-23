import type { User } from "./user.js";

export class Page {
    constructor(public url: string, public user: User) {}
}
