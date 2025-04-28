import React, { useEffect } from "react";
import AOS from "aos";
import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
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
          Парковочное пространство {isMobile && <br />} с арендуемыми <br />{" "}
          непривязанными машино-местами
        </h3>
      </div>
      <div className="box-mid1-content">
        <div>
          <p>
            Вы можете выбрать любое свободное место (согласно схеме),
            подсвеченное <br /> специальным световым маячком зеленого цвета.
          </p>
          <p>
            Мы заботимся о вашем автомобиле. {isMobile && <br />} На территории Open Parking {isMobile && <br />}
            установлены {!isMobile && <br />} камеры {isMobile && <br />} видеонаблюдения, а также {isMobile && <br />}
            осуществляется круглосуточная {isMobile && <br />} охрана, {!isMobile && <br />} что
            гарантирует безопасность {isMobile && <br />} вашего транспортного средства.
          </p>
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
