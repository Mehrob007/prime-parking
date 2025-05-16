import { use, useEffect, useRef, useState } from "react";
import bgBox1Video from "../../../assets/video/videoBanner.mp4";
import playIcon from "../../../assets/icon/play.svg";
import pauseIcon from "../../../assets/icon/pause.svg";

import audioTrue from "../../../assets/icon/1.svg";
import audioFalse from "../../../assets/icon/2.svg";

const BannerVideo = ({}) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [play, setPlay] = useState(true);
  const [tranparent, setTranparent] = useState(true);
  const [activeAudeoBunner, setActiveAudeoBunner] = useState(true);
  // const videoRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (play) {
      video.muted = false;
      video.play();
      setPlay(false);
    } else {
      video.pause();
      setPlay(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setActiveAudeoBunner(!newMuted);
    }
  };

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const source = document.createElement("source");
      source.src = bgBox1Video;
      source.type = "video/mp4";
      videoRef.current.appendChild(source);
      videoRef.current.load();
    }
  }, [shouldLoadVideo, bgBox1Video]);

  useEffect(() => {
    if (play) {
      setTranparent(false);
    } else {
      setTimeout(() => setTranparent(true), 1500);
    }
  }, [play]);

  return (
    <div className="banner-video">
      {shouldLoadVideo ? (
        <div onClick={togglePlayPause}>
          <video
            ref={videoRef}
            loop
            playsInline
            width="100%"
            style={{ objectFit: "cover" }}
          />

          <div>
            <img
              className={tranparent ? "transparent-icon" : ""}
              src={play ? playIcon : pauseIcon}
              onClick={togglePlayPause}
              alt="playIcon"
            />
          </div>
        </div>
      ) : (
        <img src="/images/banner-placeholder.jpg" alt="Баннер" />
      )}
      <nav className={play ? "off-media" : ""}>
        <button
          onClick={() => {
            if (!play) {toggleMute()};
          }}
        >
          <img
            src={activeAudeoBunner ? audioTrue : audioFalse}
            alt="sound-toggle"
          />
        </button>
      </nav>
    </div>
  );
};

export default BannerVideo;
