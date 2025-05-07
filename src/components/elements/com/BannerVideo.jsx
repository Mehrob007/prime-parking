import React, { useEffect, useRef, useState } from "react";
import bgBox1Video from "../../../assets/video/videoBanner.mp4";

const BannerVideo = ({}) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const source = document.createElement("source");
      source.src = bgBox1Video;
      source.type = "video/mp4";
      videoRef.current.appendChild(source);
      videoRef.current.load();
    }
  }, [shouldLoadVideo, bgBox1Video]);

  return (
    <>
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <img src="/images/banner-placeholder.jpg" alt="Баннер" />
      )}
    </>
  );
};

export default BannerVideo;
