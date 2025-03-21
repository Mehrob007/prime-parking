import React from "react";
import Box2 from "./elements/Box2";
import "../styles/globalStyle.css";
import Box3 from "./elements/Box3";
import Box4 from "./elements/Box4";
import Box4_1 from "./elements/Box4_1";
import Box5 from "./elements/Box5";
import Box1 from "./elements/Box1";

export default function Layout() {
  return (
    <div className="layout">
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box4_1 />
      <Box5 />
    </div>
  );
}
