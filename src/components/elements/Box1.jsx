import React from "react";

import bgBox1Video from "../../assets/video/bg-box1-video.mov";
import Header from "./Header";

export default function Box1() {
  return (
    <div className="box1-main">
      
      {/* <video src={bgBox1Video}></video> */}
      <video autoPlay loop muted playsInline>
        <source src={bgBox1Video} type="video/mp4" />
      </video>
    </div>
  );
}
