import type { User } from "./user.js";

export class Post {
    constructor(public title: string, public content: string, public user: User) {}
}
