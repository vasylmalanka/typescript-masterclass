type Author = {
  name: string;
  age: number;
  email: string;
}

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

let post: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
  },
};
