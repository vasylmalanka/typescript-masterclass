type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
}

type AwardDetails = {
  name: string;
  date: Date;
}

type Awards = {
  [key: string]: AwardDetails;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string;
};

let post: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web Awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
  category: "javascript",
};

let post2: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web Awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
};

post.author.type = "ai";