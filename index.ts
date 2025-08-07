type Contact = {
  email: string;
  phone?: string;
};

type Preferences = {
  theme: "light" | "dark";
  language: "English" | "Spanish";
};

type User = {
  readonly id: number;
  name: string;
  age?: number;
  contact: Contact;
  preferences: Preferences;
  [key: string]: any;
};

let user: User = {
  id: 1,
  name: "John Doe",
  contact: {
      email: "john@example.com",
  },
  preferences: {
      theme: "dark",
      language: "English",
  },
  additionalInfo: "This is an example of an index signature property",
};
