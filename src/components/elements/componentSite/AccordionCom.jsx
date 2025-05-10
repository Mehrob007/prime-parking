import React, { useState, useRef, useEffect } from "react";
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
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (active) {
      el.style.height = el.scrollHeight + "px";
      const timeout = setTimeout(() => {
        // el.style.height = "auto";
      }, 300); // должен совпадать с transition
      return () => clearTimeout(timeout);
    } else {
      el.style.height = el.scrollHeight + "px";
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    }
  }, [active]);

  return (
    <div
      className={`accordion-com ${active ? "active-com" : ""}`}
      style={active ? { ...style, } : style}
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
            style={{ rotate: active ? "-45deg" : "0deg", transition: "rotate 0.3s" }}
            src={plusIconOff}
            alt="plusIcon"
          />
        </nav>

        <div
          ref={contentRef}
          className="accordion-transition-wrapper"
          style={{
            overflow: "hidden",
            height: "0px",
            transition: "height 0.3s ease"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {infoOff && !htmlEl && (
            <p className={active ? "active-info" : ""}>
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
          {htmlEl && <div className={active ? "active-info" : ""}>{htmlEl}</div>}
        </div>
      </div>
    </div>
  );
}
