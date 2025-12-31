import React from "react";
import ReactLinkify from "react-linkify";

const P = ({
  element,
  children,
  className = "",
  style = {},
  preserveNewlines = true,
}) => {
  if (typeof children !== "string" || !preserveNewlines) {
    return (
      <p className={className} style={style}>
        <ReactLinkify>{children}</ReactLinkify>
      </p>
    );
  }

  const renderWithNewlines = () => {
    return children.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };
  if (element === "h3") {
    return (
      <h3 className={className} style={style}>
        <ReactLinkify>{renderWithNewlines()}</ReactLinkify>
      </h3>
    );
  }

  if (element === "h1") {
    return (
      <h1 className={className} style={style}>
        <ReactLinkify>{renderWithNewlines()}</ReactLinkify>
      </h1>
    );
  }

  return (
    <p className={className} style={style}>
      <ReactLinkify>{renderWithNewlines()}</ReactLinkify>
    </p>
  );
};

export default P;
