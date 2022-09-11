import React from 'react';
import { classNames } from '../lib/utils';

type Props = {
  content: string;
  miliseconds: number;
  highlighted?: boolean;
};

const TimelineComment: React.FC<Props> = ({
  content,
  miliseconds,
  highlighted,
}) => {
  return (
    <li>
      <div className="relative mb-4">
        <div
          className={classNames(
            highlighted ? 'border border-indigo-600 rounded-md' : '',
            'p-2 relative flex items-center space-x-3'
          )}
        >
          <div>
            <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-yellow-300"></span>
          </div>
          <div className="min-w-0 flex-1 flex items-center justify-between space-x-4">
            <div>
              <p className="text-sm text-gray-500">{content}</p>
            </div>
            <div className="text-right text-sm whitespace-nowrap text-gray-500">
              <p>{Number(miliseconds / 1000).toFixed(1)} s</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineComment;
