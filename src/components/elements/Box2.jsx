import React, { useEffect, useState } from "react";
import bgBox2Com from "../../assets/icon/bg-box2-2-com.png";
import bgBox2Com1 from "../../assets/icon/logoBox2-1.svg";
import bgBox2Car from "../../assets/icon/box2-car.png";
import AOS from "aos";
import Coso from "../../assets/icon/Coso1.png";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";

export default function Box2() {
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({
      duration: window.innerWidth < 768 ? 800 : 2000,
      once: false,
      // disable: !isMobile,
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

  return (
    <div className="box2-main">
      <h1 data-aos={"fade-down"} data-aos-duration={"700"}>
        Эксклюзивный {isMobile && <br />} сервис
      </h1>
      <div>
        <div className="bg-box2-1">
          <div className="box2-1-div">
            <img src={bgBox2Com1} alt="bgBox2Com1" />

            {isMobile ? (
              <>
                <TextComponent>
                  Первый в России Жилой Квартал, который предлагает эксклюзивный
                  круглосуточный парковочный Valet-Service для вашего
                  максимального комфорта. Забудьте о поиске мест – наши
                  профессиональные парковщики безопасно переместят ваш
                  автомобиль от лобби на закрытую, охраняемую парковку и подадут
                  его ко входу по первому запросу. Всего один клик – и ваш авто
                  уже ждёт вас у входа. Комфорт, скорость и премиальное
                  обслуживание – только для резидентов и гостей Жилого Квартала
                  Прайм Парк.
                </TextComponent>
                <TextComponent>
                  Для Гостей Жилого Квартала доступен Valet Service c почасовой
                  тарификацией.
                </TextComponent>
                <TextComponent>
                  Для Резидентов, предпочитающих самостоятельную парковку,
                  доступна аренда непривязанных машиномест на первом уровне
                  паркинга (Open Parking) и аренда привязанных машиномест на
                  втором уровне подземного паркинга (Private Parking).
                </TextComponent>
              </>
            ) : (
              <>
                <p>
                  {" "}
                  Первый в России Жилой Квартал, который предлагает эксклюзивный
                  круглосуточный парковочный Valet-Service для вашего
                  максимального комфорта. Забудьте о поиске мест – наши
                  профессиональные {!isMobile && <br />}
                  парковщики безопасно переместят ваш автомобиль от лобби{" "}
                  {!isMobile && <br />} на закрытую, охраняемую парковку и
                  подадут его ко входу по первому запросу. Всего один клик – и
                  ваш авто уже ждёт вас у входа. Комфорт, скорость и премиальное
                  обслуживание – только для резидентов и {!isMobile && <br />}{" "}
                  гостей Жилого Квартала Прайм Парк.{" "}
                </p>
                <p>
                  Для Гостей Жилого Квартала доступен Valet Service{" "}
                  {!isMobile && <br />} c почасовой тарификацией.
                </p>
                <p>
                  Для Резидентов, предпочитающих самостоятельную парковку,
                  {!isMobile ? <br /> : ""} доступна аренда непривязанных
                  машиномест на первом уровне паркинга (Open Parking) и аренда
                  привязанных машиномест на втором уровне подземного паркинга
                  (Private Parking).
                </p>
              </>
            )}
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
