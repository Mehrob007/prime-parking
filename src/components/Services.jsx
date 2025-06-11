import React from "react";
import ServicesBox1 from "./elements/ServicesBox1";
import ServicesBox2 from "./elements/ServicesBox2";
import Box5 from "./elements/Box5";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <div className="services">
      {/* <Helmet>
        <title> Prime Parking - Услуги </title>
        <meta name="description" content="Explore our parking services at Prime Parking. We offer a range of solutions to meet your parking needs." />
        <link rel="canonical" href="https://primeparking.ru/services" />
      </Helmet> */}
      <ServicesBox1 />
      {/* <ServicesBox2 /> */}
      <Box5/>
    </div>
  );
}
