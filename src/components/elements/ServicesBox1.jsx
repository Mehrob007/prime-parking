import React from "react";
import imgServices1 from "../../assets/img/imgServices1.svg";
import iconPDF from "../../assets/icon/iconPDF.svg";

export default function ServicesBox1() {
  return (
    <div className="services-box1">
      <h3>сервисы</h3>
      <h1 className="services-title">мойка</h1>
      <div className="services-sub-text">
        <p>
          На территории отапливаемого подземного паркинга квартала Prime Park
          работает собственный детейлинг-центр, <br /> который предлагает
          премиальный комплекс услуг для ухода за автомобилями резидентов,
          включая автомойку <br />
          на 8 боксов, 2 поста детейлинга и шиномонтаж.
        </p>
        <p>Запись открыта по телефону: +7 (985) 474-86-87</p>
        <p>
          Воспользоваться сервисом можно самостоятельно или передать автомобиль
          valet-парковщикам.
        </p>
      </div>
      <img src={imgServices1} alt="imgServices1" />
      <nav>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1iYoBDTNTgsjke5-gNKozrOgLufNbQM6y?usp=drive_link"
        >
          <img src={iconPDF} alt="iconPDF" />
          Прайс-лист на услуги мойки
        </a>
      </nav>
    </div>
  );
}
