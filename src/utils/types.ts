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

type LoadOptions = {
  callback: () => void;
};

export type Widget = {
  bind: (event: string, callback: () => void) => void;
  unbind: (event: string) => void;
  load: (url: string, options: LoadOptions) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
  getCurrentSound: (callback: (currentSound: SoundObject) => void) => void;
  play: () => void;
  pause: () => void;
};

export type SoundObject = {
  title: string;
  "artwork_url": string;
  user: {
    username: string;
  }
};
