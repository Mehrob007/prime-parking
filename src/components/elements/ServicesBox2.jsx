import React from "react";
import imgServices1 from "../../assets/img/imgServices1.svg";
import imgServices2 from "../../assets/img/imgServices2.png";
import iconPDF from "../../assets/icon/iconPDF.svg";
import greyIconLogo from "../../assets/icon/greyIconLogo.svg";
import iconPetrol from "../../assets/icon/iconPetrol.svg";

export default function ServicesBox2() {
  return (
    <div className="services-box2">
      <h1 className="services-title">Подписки</h1>
      <div className="service-box2-content">
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
            Воспользоваться сервисом можно самостоятельно или передать
            автомобиль valet-парковщикам.
          </p>
        </div>
        <div className="service-box2-info-private-valet">
          <div>
            <img src={greyIconLogo} alt="greyIconLogo" />
          </div>
          <div className="service-box2-info-private-valet-div-852">
            <div>
              <h3>Промо (первые 3 месяца)</h3>
            </div>
            <div>
              <h3>1 месяц</h3>
            </div>
          </div>
          <div className="service-box2-info-private-valet-div-elit">
            <h3>valet+</h3>
          </div>
          <div className="service-box2-info-private-valet-div-852">
            <div>
              <p>1.000 ₽</p>
            </div>
            <div>
              <p>3.000 ₽</p>
            </div>
          </div>
          <div className="service-box2-info-private-valet-div-elit">
            <h3>private+</h3>
          </div>
          <div className="service-box2-info-private-valet-div-852">
            <div>
              <p>1.000 ₽</p>
            </div>
            <div>
              <p>5.000 ₽</p>
            </div>
          </div>
        </div>
        <div className="services-sub-text">
          <p>
            *Стоимость услуг мойки/заправки/электрозарядки/кофе не включена в
            подписку и оплачивается <br /> дополнительно в соответствии с
            действующими тарифами.
          </p>
          <p>
            **Услуги мойки/заправки/электрозарядки/кофе доступны только для
            пользователей подписки "Valet+" и "Private+".
          </p>
        </div>
        <div className="services-price-petrol">
          <div className="services-price-petrol-top">
            <img src={iconPetrol} alt="iconPetrol" />
            <h1>Актуальные цены на бензин:</h1>
          </div>
          <div className="services-price-petrol-bottom">
            <button>
              <span>95ДТ / ССЫЛКА</span>
            </button>
            <button>
              <span>100 / ССЫЛКА</span>
            </button>
          </div>
        </div>
        <img src={imgServices2} alt="imgServices2" />
      </div>
    
    </div>
  );
}
