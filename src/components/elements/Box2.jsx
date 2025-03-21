import React, { useEffect } from "react";
import bgBox2Com from "../../assets/icon/bg-box2-2-com.svg";
import bgBox2Com1 from "../../assets/icon/logoBox2-1.svg";
import bgBox2Car from "../../assets/icon/box2-car.svg";
import AOS from "aos";

export default function Box2() {
  useEffect(() => {
    AOS.init({ });
  }, []);
  return (
    <div className="box2-main">
      <h1 data-aos={"fade-down"} data-aos-duration="700">Эксклюзивный сервис</h1>
      <div>
        <div className="bg-box2-1">
          <div>
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
          <img data-aos={"slide-right"} data-aos-duration="1700" src={bgBox2Car} alt="bgBox2Car" />
        </div>
        <div className="bg-box2-2">
          <img src={bgBox2Com} alt="bgBox2Com" />
        </div>
      </div>
    </div>
  );
}
