import React, { useState } from "react";
import plusIcon from "../../../assets/icon/plus.svg";
import plusIconOff from "../../../assets/icon/plusOff.svg";

export default function AccordionCom({ title, info, defActive = false }) {
  const [active, setActive] = useState(defActive);
  return (
    <div className={`accordion-com ${active ? "active-com" : ""}`}>
      <div className={`accordion_com_content ${active && "active-content"}`}>
        <h1>{title || "Категории машиномест:"}</h1>
        <p className={active && "active-info"}>
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
