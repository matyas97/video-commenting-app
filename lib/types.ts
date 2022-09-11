export type Video = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  url: string | null;
  comments: Comment[];
};

export type VideoProgressState = {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
};

export type Comment = {
  id: string;
  content: string;
  position: Position;
  miliseconds: number;
};

export type TimelineComment = Comment & {
  highlighted: boolean;
};

export type Position = {
  x: number;
  y: number;
};

export type Layout = {
  width: number;
  height: number;
};
