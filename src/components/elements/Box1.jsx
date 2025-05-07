import React, { useState, useRef, useEffect } from "react";


import audioTrue from "../../assets/icon/1.svg";
import audioFalse from "../../assets/icon/2.svg";
import Header from "./Header";
import BannerVideo from "./com/BannerVideo";

export default function Box1() {
  const [activeAudeoBunner, setActiveAudeoBunner] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setActiveAudeoBunner(!newMuted); 
    }
  };

  return (
    <div className="box1-main">
      {/* <video ref={videoRef} autoPlay loop muted playsInline>
        <source src={bgBox1Video} type="video/mp4" />
      </video> */}
      <BannerVideo />
      <div>
        <button onClick={toggleMute}>
          <img
            src={activeAudeoBunner ? audioTrue : audioFalse}
            alt="sound-toggle"
          />
        </button>
      </div>
    </div>
  );
}
