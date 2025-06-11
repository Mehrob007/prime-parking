import React from "react";
import imgServices1 from "../../assets/img/imgServices1.svg";
import iconPDF from "../../assets/icon/iconPDF.svg";
import useMediaQuery from "../../function/useMediaQuery";

export default function ServicesBox1() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="services-box1">
      <h3>Услуги</h3>
      <h1 className="services-title">мойка</h1>
      <div className="services-sub-text">
        <p>
          На территории отапливаемого подземного {isMobile && <br />} паркинга
          квартала Prime Park работает {isMobile && <br />} собственный
          детейлинг-центр, <br /> который предлагает премиальный{" "}
          {isMobile && <br />} комплекс услуг для ухода за автомобилями{" "}
          {isMobile && <br />} резидентов, включая автомойку <br />
          на 8 боксов, 2 поста детейлинга и {isMobile && <br />} шиномонтаж.
        </p>
        <p>
          Запись открыта по телефону: {isMobile && <br />} +7 (985) 474-86-87
        </p>
        <p>
          Воспользоваться сервисом можно самостоятельно или передать автомобиль
          valet-парковщикам.
        </p>
      </div>
      <img src={imgServices1} alt=" " />
      <nav>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1iYoBDTNTgsjke5-gNKozrOgLufNbQM6y?usp=drive_link"
        >
          <img src={iconPDF} alt=" " />
          Прайс-лист на услуги мойки
        </a>
      </nav>
    </div>
  );
}
