import React from "react";

const P = ({
  element,
  children,
  className = "",
  style = {},
  preserveNewlines = true,
}) => {
  // Если children не строка или отключена обработка переносов
  if (typeof children !== "string" || !preserveNewlines) {
    return (
      <p className={className} style={style}>
        {children}
      </p>
    );
  }

  // Обработка переносов строк
  const renderWithNewlines = () => {
    return children.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (element === "h1") {
    return (
      <h1 className={className} style={style}>
        {renderWithNewlines()}
      </h1>
    );
  }
  if (element === "h3") {
    return (
      <h3 className={className} style={style}>
        {renderWithNewlines()}
      </h3>
    );
  }

  return (
    <p className={className} style={style}>
      {renderWithNewlines()}
    </p>
  );
};

export default P;
