type LoadOptions = {
  callback: () => void;
};

export type Widget = {
  bind: (event: string, callback: () => void) => void;
  unbind: (event: string) => void;
  load: (url: string, options: LoadOptions) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
  getCurrentSound: (callback: (currentSound: SoundObject) => void) => void;
};

export type SoundObject = {
  title: string;
  "artwork_url": string;
  user: {
    username: string;
  }
};
