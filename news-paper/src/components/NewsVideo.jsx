import React, { useRef, useState } from 'react';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';

const NewsVideo = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <video ref={videoRef} className="w-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="float-right flex items-center gap-2">
        <FacebookOutlinedIcon sx={{ color: "gray" }} />
        <TwitterIcon sx={{ color: "gray" }} />
        <LinkIcon sx={{ color: "gray", transform: "rotate(135deg)" }} />
      </div>
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlayPause}
        >
          <PlayCircleFilledOutlinedIcon sx={{fontSize:"45px"}} />
        </div>
      )}
    </div>
  );
};

export default NewsVideo;
