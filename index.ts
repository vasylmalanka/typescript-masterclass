enum Roles {
  admin = 'admin',
  author = 'author',
  editor = 'editor',
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = 'read',
  write = 'write',
  execute = 'execute',
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface AdminUser extends User, Role, UserPermissions {
  numberOfUsersReporting: number;
}

interface UserWithAddress extends User {
  address: string;
}

const user: User = {
  name: 'john',
  email: 'john@email.com',
  phone: 9876543,
  gender: 'male',
};

const userWithAddress: UserWithAddress = {
  name: 'john',
  email: 'john@email.com',
  phone: 9876543,
  gender: 'male',
  address: 'This is an address',
};

const rob: AdminUser = {
  name: 'rob',
  email: 'rob@email.com',
  phone: 99876787,
  gender: 'male',
  role: Roles.admin,
  permissions: [
    PermissionsList.execute,
    PermissionsList.read,
    PermissionsList.write,
  ],
  numberOfUsersReporting: 5,
};

console.log(rob);
