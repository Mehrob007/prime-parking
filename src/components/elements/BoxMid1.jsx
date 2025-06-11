import React, { useEffect } from "react";
import AOS from "aos";
import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
export default function BoxMid1() {
  const { redirect } = functions();
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  });
  return (
    <div className="box-mid1">
      <div className="box-mid1-header">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          Open Parking
        </h1>
        <h3>
          {isMobile ? (
            <TextComponent>
              Парковочное пространство с арендуемыми непривязанными
              машино-местами
            </TextComponent>
          ) : (
            <>
              Парковочное пространство с арендуемыми <br />
              непривязанными машино-местами
            </>
          )}
        </h3>
      </div>
      <div className="box-mid1-content">
        <div>
          {isMobile ? (
            <TextComponent>
              Вы можете выбрать любое свободное место (согласно схеме),
              подсвеченное специальным световым маячком зеленого цвета.
            </TextComponent>
          ) : (
            <p>
              Вы можете выбрать любое свободное место (согласно схеме),
              подсвеченное {!isMobile ? <br /> : ""} специальным световым
              маячком зеленого цвета.
            </p>
          )}
          {isMobile ? (
            <TextComponent>
              Мы заботимся о вашем автомобиле. На территории Open Parking
              установлены {!isMobile ? <br /> : ""} камеры видеонаблюдения, а
              также осуществляется круглосуточная охрана,{" "}
              {!isMobile ? <br /> : ""} что гарантирует безопасность вашего
              транспортного средства.
            </TextComponent>
          ) : (
            <p>
              Мы заботимся о вашем автомобиле. На территории Open Parking
              установлены {!isMobile ? <br /> : ""} камеры видеонаблюдения, а
              также осуществляется круглосуточная охрана,{" "}
              {!isMobile ? <br /> : ""} что гарантирует безопасность вашего
              транспортного средства.
            </p>
          )}
        </div>
        <nav>
          <button
            onClick={() =>
              redirect(
                "https://drive.google.com/drive/folders/1fs_Eic94UUFKag61hyNspeaYnkd-mp6i?usp=drive_link",
              )
            }
          >
            <span>Ознакомиться со схемой</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
