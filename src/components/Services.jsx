import React from "react";
import ServicesBox1 from "./elements/ServicesBox1";
import ServicesBox2 from "./elements/ServicesBox2";
import Box5 from "./elements/Box5";

export default function Services() {
  return (
    <div className="services">
      <ServicesBox1 />
      <ServicesBox2 />
      <Box5/>
    </div>
  );
}
