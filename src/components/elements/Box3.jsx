import React, { useEffect } from "react";
import AOS from "aos";
import bgBox3Car from "../../assets/icon/bg-box3-car.png";
import logoIconBox3 from "../../assets/icon/logo-icon-box3.svg";
import iconLineBox3 from "../../assets/icon/icon-line-box3.svg";
import useMediaQuery from "../../function/useMediaQuery";

export default function Box3() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="box3-main">
      <h1 data-aos={"fade-down"} data-aos-duration={"700"}>
        Концепция {isMobile && <br />} паркинга
      </h1>
      <div>
        <div className="bg-box3-1">
          <div>
            {/* <img src={logoIconBox3} alt="logoIconBox3" /> */}
            <div>
              <div>
                <h1>ЗОНЫ У ЛОББИ</h1>
                <p>
                  Drop-off зона для посадки-высадки пассажиров
                  <br />
                  {isMobile && <br />}
                  Зона передачи авто профессиональным парковщикам
                  <br />
                  {isMobile && <br />}
                  Зона приёма и получения авто для гостей Жилого квартала Прайм
                  Парк
                </p>
              </div>
              <img src={iconLineBox3} alt="iconLineBox3" />
              <div>
                <h1>
                  ПЕРВЫЙ УРОВЕНЬ <br />
                  ПОДЗЕМНОГО ПАРКИНГА
                </h1>
                <p>
                  Зона хранения автомобилей Valet-Service <br />
                  {isMobile && <br />}
                  Зона подачи автомобилей для абонементов Valet-Service{" "}
                  <br />
                  {isMobile && <br />}
                  Обособленные зоны для проведения погрузо-разгрузочных работ{" "}
                  <br />
                  {isMobile && <br />}
                  Зона для аренды непривязанных машино-мест (Open Parking)
                </p>
              </div>
              <img src={iconLineBox3} alt="iconLineBox3" />
              <div>
                <h1>
                  ВТОРОЙ УРОВЕНЬ <br />
                  ПОДЗЕМНОГО ПАРКИНГА
                </h1>
                <p>
                  Приватная зона для аренды привязанных машино-мест (Private
                  Parking)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-box3-2">
          <img
            data-aos={"fade-up"}
            data-aos-duration="1700"
            src={bgBox3Car}
            alt="bgBox3Car"
          />
        </div>
      </div>
    </div>
  );
}
