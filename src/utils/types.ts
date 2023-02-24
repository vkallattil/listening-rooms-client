export interface RoomLabel {
  id: string;
  label: string;
  isPrivate: boolean;
  userCount: number;
}

export interface Room {
  id: string;
  label: string;
  isPrivate: boolean;
  users: User[];
  songUrl: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}
