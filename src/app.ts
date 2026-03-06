type IsString<T> = T extends string ? 'Yes' : 'No';

type Test1 = IsString<string>;
type Test2 = IsString<number>;

type OptionIfString<T> = {
    [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

type User = {
    id: number;
    name: string;
    age: number;
};

type OptionalNameUser = OptionIfString<User>;
