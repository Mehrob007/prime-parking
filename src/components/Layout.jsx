import React from "react";
import AccordionCom from "./elements/componentSite/AccordionCom";
import Box2 from "./elements/Box2";
import "../styles/globalStyle.css";
import Box3 from "./elements/Box3";

export default function Layout() {
  return (
    <div className="layout" style={{ paddingTop: "100vh" }}>
      <Box2 />
      <Box3 />
    </div>
  );
}
