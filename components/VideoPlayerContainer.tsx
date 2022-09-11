import React from 'react';
import ReactPlayer from 'react-player';
import { useRecoilState } from 'recoil';
import { videoPlayingState } from '../lib/recoil';
import { VideoProgressState } from '../lib/types';

type Props = {
  url: string;
  setProgress?: (state: VideoProgressState) => void;
};

const VideoPlayerContainer: React.FC<Props> = ({ url, setProgress }) => {
  const ref = React.useRef<ReactPlayer>(null);

  const [playing, setPlaying] = useRecoilState(videoPlayingState);

  if (!playing) {
    ref.current?.getInternalPlayer().pause();
  }

  return (
    <div className="relative h-[56.25vh] border">
      <ReactPlayer
        className="absolute top-0 right-0 bottom-0 left-0"
        width="100%"
        height="100%"
        ref={ref}
        url={url}
        controls={true}
        volume={0}
        muted={true}
        progressInterval={100}
        onProgress={(state: VideoProgressState) => {
          setProgress?.(state);
        }}
        onPlay={() => {
          setPlaying(true);
        }}
        onPause={() => {
          setPlaying(false);
        }}
        fallback={<p>Video could not be loaded 😕</p>}
      />
    </div>
  );
};

export default VideoPlayerContainer;
