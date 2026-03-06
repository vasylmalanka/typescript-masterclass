type User = {
    id: number;
    name: string;
    age: number;
};

type UserNameType = User['name'];
type UserIDType = User['id'];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const userData: User = { id: 1, name: 'Bob', age: 25 };

const userName: User['name'] = getProperty(userData, 'name');
