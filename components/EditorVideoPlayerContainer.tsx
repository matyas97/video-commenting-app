import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editorUploadedVideoUrl, editorVideoProgress } from '../lib/recoil';
import EditorVideoCommentContainer from './EditorVideoCommentContainer';
import NewVideoCommentContainer from './NewVideoCommentContainer';
import VideoPlayerContainer from './VideoPlayerContainer';
import VideoUpload from './VideoUpload';

const EditorVideoPlayerContainer: React.FC = () => {
  const [url, setUrl] = useRecoilState(editorUploadedVideoUrl);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.files?.[0];

    if (url) {
      setUrl(URL.createObjectURL(url));
    }
  };

  const setProgress = useSetRecoilState(editorVideoProgress);

  return (
    <div className="relative h-[56.25vh]">
      {url ? (
        <>
          <EditorVideoCommentContainer />
          <VideoPlayerContainer url={url} setProgress={setProgress} />
          <NewVideoCommentContainer />
        </>
      ) : (
        <VideoUpload handleUpload={handleUpload} />
      )}
    </div>
  );
};

export default EditorVideoPlayerContainer;
