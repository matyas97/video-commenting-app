import React from 'react';
import { classNames } from '../lib/utils';

type Props = {
  content: string;
  setContent: (content: string) => void;
  miliseconds: number;
};

const NewTimelineComment: React.FC<Props> = ({
  content,
  miliseconds,
  setContent,
}) => {
  return (
    <div className="relative pb-8">
      <div className="relative flex items-center space-x-3">
        <div>
          <span
            className={classNames(
              'bg-yellow-300',
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
            )}
          ></span>
        </div>
        <div className="min-w-0 flex-1 flex items-center justify-between space-x-4">
          <textarea
            autoFocus={true}
            rows={1}
            name="content"
            id="content"
            placeholder="Enter your comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm whitespace-nowrap text-gray-500 border-gray-300 rounded-md"
          />
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <p>{Number(miliseconds / 1000).toFixed(1)} s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTimelineComment;
