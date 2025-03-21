import React, { useState } from "react";
import plusIcon from "../../../assets/icon/plus.svg";
import plusIconOff from "../../../assets/icon/plusOff.svg";

export default function AccordionCom({ title, info, defActive = false, style, htmlEl, infoOff = true }) {
  const [active, setActive] = useState(defActive);
  return (
    <div className={`accordion-com ${active ? "active-com" : ""}`} style={style}>
      <div className={`accordion_com_content ${active && "active-content"}`}>
        <h1>{title || "Категории машиномест:"}</h1>
        {infoOff && <p className={active && "active-info"}>
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
        </p>}
        <div className={active && "active-info"}>
        {htmlEl}
        </div>
        <img
          className="accordion_com_plus_icon"
          style={{ rotate: active && "-45deg" }}
          onClick={() => setActive(!active)}
          src={plusIconOff}
          alt="plusIcon"
        />
      </div>
    </div>
  );
}
