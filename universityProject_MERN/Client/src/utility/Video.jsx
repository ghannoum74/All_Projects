import { useRef } from "react";
import videoSource from "../assets/7687791-hd_1280_720_30fps.mp4";
import PropTypes from "prop-types";
const Video = ({ showVideo, setShowVideo }) => {
  const blurVideo = useRef(null);
  const setBlur = (e) => {
    if (e.target == blurVideo.current) {
      setShowVideo(false);
    }
  };
  return (
    <div
      className="container-Video"
      data-showvideo={showVideo}
      ref={blurVideo}
      onClick={setBlur}
    >
      <video className="video" src={videoSource} controls></video>
    </div>
  );
};

export default Video;
