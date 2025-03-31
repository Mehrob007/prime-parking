import React, { useEffect, useState } from "react";
import bgBox2Com from "../../assets/icon/bg-box2-2-com.svg";
import bgBox2Com1 from "../../assets/icon/logoBox2-1.svg";
import bgBox2Car from "../../assets/icon/box2-car.svg";
import AOS from "aos";
import Coso from "../../assets/icon/Колесо1.svg";

export default function Box2() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    const handleAnimation = () => {
      const car = document.querySelector(".car-container1");
      if (car?.classList.contains("aos-animate")) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleAnimation);
    return () => window.removeEventListener("scroll", handleAnimation);
  }, []);

  return (
    <div className="box2-main">
      <h1 data-aos={"fade-down"} data-aos-duration="700">
        Эксклюзивный сервис
      </h1>
      <div>
        <div className="bg-box2-1">
          <div className="box2-1-div">
            <img src={bgBox2Com1} alt="bgBox2Com1" />
            <p>
              Первый в России ЖК, где на постоянной основе, 24/7, работает
              Валет-сервис, с отдельными Валет стойками на первом уровне
              подземного паркинга. Пространство для тех, кто ценит время,
              комфорт и безупречный уровень обслуживания.
            </p>
            <p>
              Доступен часовой валет-сервис для гостей жителей и Private Valet
              абонементы.
            </p>
          </div>
          <div
            className="car-container1"
            data-aos={"slide-right"}
            data-aos-duration="1700"
          >
            <img src={bgBox2Car} className="car-mers" alt="bgBox2Car" />
            <img
              src={Coso}
              className={`coso11 ${isAnimated ? "active-rotate1" : ""}`}
              alt="Coso"
            />
            <img
              src={Coso}
              className={`coso12 ${isAnimated ? "active-rotate1" : ""}`}
              alt="Coso"
            />
          </div>
        </div>
        <div className="bg-box2-2">
          <img
            src={bgBox2Com}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1700"
            alt="bgBox2Com"
          />
        </div>
      </div>
    </div>
  );
}
