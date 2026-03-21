export function createUserProfile(id, name) {
  return {
    userId: id,
    username: name,
    status: 'active',
  };
}
