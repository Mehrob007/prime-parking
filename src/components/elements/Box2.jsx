import React, { useEffect, useState } from "react";
import bgBox2Com from "../../assets/icon/bg-box2-2-com.svg";
import bgBox2Com1 from "../../assets/icon/logoBox2-1.svg";
import bgBox2Car from "../../assets/icon/box2-car.svg";
import AOS from "aos";
import Coso from "../../assets/icon/Колесо1.svg";
import useMediaQuery from "../../function/useMediaQuery";

export default function Box2() {
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({
      duration: window.innerWidth < 768 ? 800 : 2000,
      once: false,
      disable: !isMobile,
      offset: window.innerWidth < 768 ? 0 : 120,
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

  console.log("====================================");
  console.log(isMobile);
  console.log("====================================");

  return (
    <div className="box2-main">
      <h1 data-aos={"fade-down"} data-aos-duration={"700"}>
        Эксклюзивный {isMobile && <br />} сервис
      </h1>
      <div>
        <div className="bg-box2-1">
          <div className="box2-1-div">
            <img src={bgBox2Com1} alt="bgBox2Com1" />
            <p>
              Первый в России Жилой Квартал, {isMobile && <br />} который
              предлагает эксклюзивный {isMobile && <br />}
              круглосуточный парковочный Valet-{isMobile && <br />}Service для
              вашего максимального {isMobile && <br />}
              комфорта. Забудьте о поиске мест {isMobile && <br />} – наши
              профессиональные{isMobile && <br />}
              {!isMobile && <br />}
              парковщики безопасно переместят {isMobile && <br />} ваш
              автомобиль от лобби{isMobile && <br />}
              {!isMobile && <br />} на закрытую, охраняемую парковку
              {isMobile && <br />} и подадут его ко входу по первому
              {isMobile && <br />} запросу. Всего один клик – и ваш авто
              {isMobile && <br />} уже ждёт вас у входа. Комфорт,
              {isMobile && <br />} скорость и премиальное {isMobile && <br />}
              обслуживание – только для {isMobile && <br />} резидентов и
              {!isMobile && <br />} гостей  Жилого {isMobile && <br />}
              Квартала Прайм Парк.
            </p>
            <p>
              Для Гостей Жилого Квартала доступен {isMobile && <br />} Valet
              Service {!isMobile && <br />} c почасовой {isMobile && <br />}
              тарификацией.
            </p>
            <p>
              Для Резидентов, предпочитающих {isMobile && <br />}
              самостоятельную парковку,
              <br /> доступна аренда непривязанных {isMobile && <br />}
              машиномест на первом уровне {isMobile && <br />} паркинга (Open
              Parking) {isMobile && <br />} и аренда привязанных машиномест
              {isMobile && <br />} на втором уровне подземного
              {isMobile && <br />}
              паркинга (Private Parking).
            </p>
          </div>
          <div
            className="car-container1"
            data-aos={!isMobile ? "slide-right" : "slide-right"}
            data-aos-duration={!isMobile ? "1700" : "1700"}
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
            data-aos={!isMobile && "fade-up"}
            // data-aos-offset="500"
            data-aos-duration={!isMobile && "1700"}
            alt="bgBox2Com"
          />
        </div>
      </div>
    </div>
  );
}
