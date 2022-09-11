import React from 'react';
import { useRecoilValue } from 'recoil';
import { editorVideoComments } from '../lib/recoil';
import VideoCommentList from './VideoCommentList';

const EditorVideoCommentContainer: React.FC = () => {
  const comments = useRecoilValue(editorVideoComments);

  return <VideoCommentList comments={comments} />;
};

export default EditorVideoCommentContainer;
