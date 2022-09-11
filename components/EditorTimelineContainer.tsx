import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  editorComments,
  editorNewCommentAdding,
  editorNewCommentPosition,
  editorTimelineComments,
  editorVideoProgress,
  videoPlayingState,
} from '../lib/recoil';
import Button from './Button';
import NewTimelineComment from './NewTimelineComment';
import TimelineCommentList from './TimelineCommentList';
import { nanoid } from 'nanoid';
import { Comment } from '../lib/types';

const EditorTimelineContainer: React.FC = () => {
  const comments = useRecoilValue(editorTimelineComments);

  const setComments = useSetRecoilState(editorComments);

  const [adding, setAdding] = useRecoilState(editorNewCommentAdding);

  const [videoPlaying, setVideoPlaying] = useRecoilState(videoPlayingState);

  const startAdding = () => {
    setAdding(true);

    if (videoPlaying) {
      setVideoPlaying(false);
    }
  };

  const cancelAdding = () => {
    setAdding(false);
    setNewCommentContent('');
  };

  const [newCommentContent, setNewCommentContent] = React.useState('');

  const position = useRecoilValue(editorNewCommentPosition);

  const resetPosition = useResetRecoilState(editorNewCommentPosition);

  const videoProgress = useRecoilValue(editorVideoProgress);

  const addComment = () => {
    const newComment: Comment = {
      id: nanoid(),
      content: newCommentContent,
      position: {
        x: position.x,
        y: position.y,
      },
      miliseconds: videoProgress.playedSeconds * 1000,
    };

    setComments([...comments, newComment]);

    cancelAdding();

    resetPosition();
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold leading-tight text-gray-900">
          Comments
        </h2>
        {adding ? (
          <div className="space-x-4">
            <Button variant="secondary" onClick={cancelAdding}>
              Cancel
            </Button>
            <Button onClick={addComment}>Save</Button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Button onClick={startAdding}>Add</Button>
          </div>
        )}
      </div>
      <div className="py-8">
        {adding && (
          <NewTimelineComment
            content={newCommentContent}
            setContent={setNewCommentContent}
            miliseconds={videoProgress.playedSeconds * 1000}
          />
        )}
        <TimelineCommentList comments={comments} />
      </div>
    </>
  );
};

export default EditorTimelineContainer;
