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
              Первый в России Жилой Квартал, который предлагает эксклюзивный
              круглосуточный парковочный Valet-Service для вашего максимального
              комфорта. Забудьте о поиске мест – наши профессиональные <br />
              парковщики безопасно переместят ваш автомобиль от лобби  <br /> на 
              закрытую, охраняемую парковку и подадут его ко входу по первому
              запросу. Всего один клик – и ваш авто уже ждёт вас у входа.
              Комфорт, скорость и премиальное обслуживание – только для
              резидентов и <br /> гостей  Жилого Квартала Прайм Парк.
            </p>
            <p>
              Для Гостей Жилого Квартала доступен Valet Service <br /> c
              почасовой тарификацией.
            </p>
            <p>
              Для Резидентов, предпочитающих самостоятельную парковку, <br />{" "}
              доступна аренда непривязанных машиномест на первом уровне паркинга
              (Open Parking) и аренда привязанных машиномест на втором уровне
              паркинга (Private Parking).
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
            data-aos="fade-up"
            // data-aos-offset="500"
            data-aos-duration="1700"
            alt="bgBox2Com"
          />
        </div>
      </div>
    </div>
  );
}
