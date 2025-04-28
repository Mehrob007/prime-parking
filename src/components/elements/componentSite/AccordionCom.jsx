import React, { useState } from "react";
import plusIcon from "../../../assets/icon/plus.svg";
import plusIconOff from "../../../assets/icon/plusOff.svg";

export default function AccordionCom({
  title,
  info,
  defActive = false,
  style,
  htmlEl = false,
  infoOff = true,
  activeStyle,
  styleAccordionCom,
  activeContent = true
}) {
  const [active, setActive] = useState(defActive);
  return (
    <div
      className={`accordion-com ${active ? "active-com" : ""}`}
      style={active ? { ...style, ...activeStyle } : style}
      onClick={() => setActive(!active)}
    >
      <div
        className={`accordion_com_content ${activeContent && active && "active-content"}`}
        style={!active ? styleAccordionCom : activeStyle}
      >
        <nav>
          <h1>{title || "Категории машиномест:"}</h1>
          <img
            className="accordion_com_plus_icon"
            style={{ rotate: active && "-45deg" }}
            src={plusIconOff}
            alt="plusIcon"
          />
        </nav>
        {infoOff && !htmlEl && (
          <p
            onClick={(e) => e.stopPropagation()}
            className={active && "active-info"}
          >
            {info ||
              `VIP, Platinum, Gold, Silver, Green, White - категория устанавливается в зависимости от 
  удаленности от лифтовой группы и обособленности машиноместа.`
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
          </p>
        )}
        <div
          onClick={(e) => e.stopPropagation()}
          className={active && "active-info"}
        >
          {htmlEl}
        </div>
      </div>
    </div>
  );
}
