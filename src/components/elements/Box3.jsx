import React, { useEffect } from "react";
import AOS from "aos";
import bgBox3Car from "../../assets/icon/bg-box3-car.svg";
import logoIconBox3 from "../../assets/icon/logo-icon-box3.svg";
import iconLineBox3 from "../../assets/icon/icon-line-box3.svg";

export default function Box3() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="box3-main">
      <h1 data-aos={"fade-down"} data-aos-duration="500">
        Концепция паркинга
      </h1>
      <div>
        <div className="bg-box3-1">
          <div>
            <img src={logoIconBox3} alt="logoIconBox3" />
            <div>
              <div>
                <h1>Первый уровень подземного паркинга</h1>
                <p>Сервисный трафик и Валет-сервис.</p>
              </div>
              <img src={iconLineBox3} alt="iconLineBox3" />
              <div>
                <h1>Второй уровень подземного паркинга</h1>
                <p>
                  Доступ на паркинг имеется только у жителей, оформивших
                  подписку на Private Parking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-box3-2">
          <img
            data-aos={"slide-left"}
            data-aos-duration="1700"
            src={bgBox3Car}
            alt="bgBox3Car"
          />
        </div>
      </div>
    </div>
  );
}
