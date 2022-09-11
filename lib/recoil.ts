import { atom, selector } from 'recoil';
import {
  Comment,
  Position,
  TimelineComment,
  VideoProgressState,
} from './types';
import { showComments } from './utils';

export const videoPlayingState = atom<boolean>({
  key: 'videoPlayingState',
  default: false,
});

export const editorUploadedVideoUrl = atom<string | null>({
  key: 'editorUploadedVideoUrl',
  default: null,
});

export const editorVideoProgress = atom<VideoProgressState>({
  key: 'editorVideoProgress',
  default: {
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  },
});

export const editorComments = atom<Comment[]>({
  key: 'editorComments',
  default: [],
});

export const editorNewCommentAdding = atom<boolean>({
  key: 'editorNewCommentAdding',
  default: false,
});

export const editorNewCommentPosition = atom<Position>({
  key: 'editorNewCommentPosition',
  default: {
    x: 50,
    y: 50,
  },
});

export const editorVideoComments = selector<Comment[]>({
  key: 'editorVideoComments',
  get: ({ get }) => {
    const comments = get(editorComments);
    const playedSeconds = get(editorVideoProgress).playedSeconds;

    const commentsToShow = [];

    for (const comment of comments) {
      const show = showComments(playedSeconds, comment.miliseconds);

      if (show) {
        commentsToShow.push(comment);
      }
    }

    return commentsToShow;
  },
});

export const editorTimelineComments = selector<TimelineComment[]>({
  key: 'editorTimelineSortedComments',
  get: ({ get }) => {
    const comments = get(editorComments);
    const playedSeconds = get(editorVideoProgress).playedSeconds;

    const commentsSlice = comments.slice();
    commentsSlice.sort((a, b) => a.miliseconds - b.miliseconds);

    const commentsToShow: TimelineComment[] = [];

    for (const comment of commentsSlice) {
      const highlight = showComments(playedSeconds, comment.miliseconds);

      if (highlight) {
        commentsToShow.push({
          ...comment,
          highlighted: true,
        });
      } else {
        commentsToShow.push({
          ...comment,
          highlighted: false,
        });
      }
    }

    return commentsToShow;
  },
});

export const autoStopState = atom<boolean>({
  key: 'autoStopState',
  default: true,
});
