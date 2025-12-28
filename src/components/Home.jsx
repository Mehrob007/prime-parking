import React from "react";
import Box2 from "./elements/Box2";
// import "../styles/globalStyle.css";
import Box3 from "./elements/Box3";
import Box4 from "./elements/Box4";
import Box4_1 from "./elements/Box4_1";
import Box5 from "./elements/Box5";
import Box1 from "./elements/Box1";
import BoxMid1 from "./elements/BoxMid1";
import BoxMid2 from "./elements/BoxMid2";
import BannerVideo from "./elements/com/BannerVideo";
import BoxMid1_1 from "./elements/BoxMid1_1";
// import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      {/* <Helmet>
        <title> Prime Parking </title>
      </Helmet> */}
      <Box1 />
      <Box2 />
      <Box3 />
      <BannerVideo />
      <Box4 />
      <Box4_1 />
      <BoxMid1 />
      <BoxMid1_1 />
      <BoxMid2 />
      <Box5 />
    </div>
  );
}
