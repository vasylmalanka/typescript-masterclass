const user = {
    id: 1,
    name: 'Alice',
    age: 30,
};

type UserType = typeof user;

const newUser: UserType = {
    id: 2,
    name: 'Bob',
    age: 32,
};

function getUser() {
    return {
        id: 1,
        name: 'Alice',
        age: 30,
    };
}

type ReturnUserType = ReturnType<typeof getUser>;
