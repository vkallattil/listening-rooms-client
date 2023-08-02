export interface RoomLabel {
  id: string;
  label: string;
}

export interface Room {
  id: string;
  label: string;
  widgetUrl: string;
  socketUsers: string[];
}

type LoadOptions = {
  callback: () => void;
};

export type Widget = {
  prev(): unknown;
  next(): unknown;
  skip: (index: number) => unknown;
  getSounds: (callback: (sounds: SoundObject[]) => void) => void;
  bind: (event: string, callback: (e: any) => void) => void;
  unbind: (event: string) => void;
  load: (url: string, options: LoadOptions) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
  getCurrentSound: (callback: (currentSound: SoundObject) => void) => void;
  play: () => void;
  pause: () => void;
  seekTo: (milliseconds: number) => void;
};

export type SoundObject = {
  monetization_model: string;
  id: string;
  title: string;
  "artwork_url": string;
  user: {
    username: string;
  }
  duration: number;
};