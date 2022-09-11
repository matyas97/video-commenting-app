import React from 'react';
import { TimelineComment as TimelineCommentType } from '../lib/types';
import TimelineComment from './TimelineComment';

type Props = {
  comments: TimelineCommentType[];
};

const TimelineCommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <TimelineComment
              key={comment.id}
              content={comment.content}
              miliseconds={comment.miliseconds}
              highlighted={comment.highlighted}
            />
          ))
        ) : (
          <p>Create your first comment by pressing the Add button.</p>
        )}
      </ul>
    </div>
  );
};

export default TimelineCommentList;
