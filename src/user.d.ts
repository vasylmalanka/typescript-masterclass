// export interface UserProfile {
//   userId: number;
//   username: string;
//   status: 'active' | 'inactive';
// }

export type UserProfile = {
  userId: number;
  username: string;
  status: 'active' | 'inactive';
}

export function createUserProfile(
  id: number,
  name: string,
): UserProfile;
