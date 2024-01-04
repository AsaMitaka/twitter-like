export type Tweet = {
  text: string;
  id: string;
  user: User;
};

export type User = {
  name: string;
  username: string;
  avatarUrl: string;
  likes: number[];
  tweets: Tweet[];
};

export enum STATUS {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'REJECTED',
}
