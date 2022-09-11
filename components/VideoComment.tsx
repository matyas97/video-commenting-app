import React from 'react';
import { Position } from '../lib/types';
import { classNames } from '../lib/utils';

type Props = {
  position: Position;
  animate?: boolean;
};

const VideoComment: React.FC<Props> = ({ position, animate }) => {
  return (
    <div
      className={classNames(
        animate ? 'animate-bounce' : '',
        'absolute z-10 max-w-xs p-2.5 shadow-sm bg-yellow-300 hover:bg-yellow-400 rounded-full text-white'
      )}
      style={{
        top: position.y + '%',
        left: position.x + '%',
      }}
    ></div>
  );
};

export default VideoComment;
