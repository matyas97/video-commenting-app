import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  editorNewCommentAdding,
  editorNewCommentPosition,
} from '../lib/recoil';
import { Layout, Position } from '../lib/types';
import { getRelativePosition } from '../lib/utils';
import VideoComment from './VideoComment';

const NewVideoCommentContainer: React.FC = () => {
  const adding = useRecoilValue(editorNewCommentAdding);

  const [position, setPosition] = useRecoilState(editorNewCommentPosition);

  const ref = React.useRef<HTMLDivElement>(null);

  const placeComment = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current?.clientWidth && ref.current?.clientHeight) {
      const position: Position = {
        x: e.clientX - e.currentTarget.getBoundingClientRect().left,
        y: e.clientY - e.currentTarget.getBoundingClientRect().top,
      };

      const layout: Layout = {
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      };

      const relativePosition: Position = getRelativePosition(position, layout);

      setPosition(relativePosition);
    }
  };

  if (!adding) return null;

  return (
    <div
      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10"
      ref={ref}
      onClick={(e) => placeComment(e)}
    >
      <VideoComment position={position} animate={true} />
    </div>
  );
};

export default NewVideoCommentContainer;
