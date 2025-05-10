import React, { useEffect, useState } from "react";
import imgBox5 from "../../assets/icon/img-box5.png";
import Coso from "../../assets/icon/Колесо.png";
import logoCF from "../../assets/icon/logoCF.svg";
import AOS from "aos";
import axios from "axios";
import PhoneInput from "./com/Cleave";
import useMediaQuery from "../../function/useMediaQuery";

export default function Box5({ footerForm = 1 }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [allText, setAllText] = useState({
    userName: "",
    phoneNumber: "",
    description: "",
  });
  const [onActiv, setOnActive] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const sendInTelegram = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ENV_URL}/send-message`,
        {
          chatId: import.meta.env.VITE_ENV_URL_CHAT_ID,
          message: `👤Имя: ${allText.userName} \n📱Телефон: ${allText.phoneNumber} \n💬Текст обращения: ${allText.description}`,
        },
      );
      setAllText({
        userName: "",
        phoneNumber: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (a, b) => {
    setAllText({
      ...allText,
      [a]: b,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // Чтобы срабатывало повторно
    });

    const handleAnimation = () => {
      const car = document.querySelector(".car-container");
      if (car?.classList.contains("aos-animate")) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleAnimation);
    return () => window.removeEventListener("scroll", handleAnimation);
  }, []);
  useEffect(() => {
    setOnActive(
      Boolean(
        allText?.userName?.trim() &&
          allText?.phoneNumber?.trim() &&
          allText?.description?.trim(),
      ),
    );
  }, [allText]);

  return (
    <footer className={`box5-main ${footerForm === 2 ? "footer-form2" : ""}`}>
      <h1 data-aos={"fade-down"} data-aos-duration="700">
        Контакты
      </h1>
      <div className="content-box5">
        <div className="form-Box5">
          <div>
            <div className="input-box5">
              <input
                value={allText?.userName}
                onChange={(e) => onChange("userName", e.target.value)}
                placeholder="Ваше имя"
                type="text"
              />
            </div>
            <div className="input-box5 input-box5-number">
              {/* <input
                value={allText?.phoneNumber}
                onChange={(e) =>
                  onChange("phoneNumber", e.target.value.replace(/\D/g, ""))
                }
                placeholder="Телефон"
                type="text"
              /> */}
              <PhoneInput
                value={allText?.phoneNumber}
                onChange={(val) => onChange("phoneNumber", val)}
              />
            </div>
            <div className="input-box5 textarea-box5">
              <textarea
                value={allText?.description}
                onChange={(e) => onChange("description", e.target.value)}
                placeholder="Текст обращения"
              ></textarea>
            </div>
          </div>
          <span>
            <button
              onClick={() => (onActiv ? sendInTelegram() : "")}
              className={`${onActiv ? "active-button-box5" : ""}`}
            >
              Отправить обращение
            </button>
          </span>
          <p>
            Нажимая на кнопку,{" "}
            <a
              href="https://drive.google.com/drive/folders/1FZsvRtHovV6E_oL7iDrtYlzUMVfM0Id3?usp=drive_link"
              target="_blank"
            >
              вы даете согласие на обработку персональных данных и соглашаетесь
              c политикой конфиденциальности
            </a>
          </p>
        </div>
        <div>
          <div className="info-contact-1">
            <h1>
              Консьерж <br />
              служба
            </h1>
            <h3>
              09:00 - 18:00, ПН - ПТ <br /> +7 (495) 481 22 44 <br />{" "}
              {/* sales@primeparking.ru */}
            </h3>
          </div>
          <div className="info-contact-1">
            <h1>
              Техническая <br />
              служба
            </h1>
            <h3>
              Круглосуточная поддержка <br /> +7 (495) 481 22 44 (доб.111)
            </h3>
          </div>
          <div
            className="div-car-box5 car-container"
            data-aos={"slide-left"}
            data-aos-duration="1700"
          >
            <img src={imgBox5} alt="imgBox5" />
            <img
              src={Coso}
              className={`coso1 ${isAnimated ? "active-rotate" : ""}`}
              alt="Coso"
            />
            <img
              src={Coso}
              className={`coso2 ${isAnimated ? "active-rotate" : ""}`}
              alt="Coso"
            />
          </div>
        </div>
      </div>
      <div className="footer-box5">
        <img src={logoCF} alt="logoCF" />
        <p>2025 © Prime Park Parking</p>
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Вернуться наверх ▴
        </a>
      </div>
    </footer>
  );
}
