import React from 'react';
import { Comment } from '../lib/types';
import VideoComment from './VideoComment';

type Props = {
  comments: Comment[];
};

const VideoCommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0">
      {comments &&
        comments.map((comment) => {
          return <VideoComment key={comment.id} position={comment.position} />;
        })}
    </div>
  );
};

export default VideoCommentList;
