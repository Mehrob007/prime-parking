import React, { useEffect } from "react";
import AccordionCom from "./componentSite/AccordionCom";
import appStor from "../../assets/icon/appStor.svg";
import googlePlay from "../../assets/icon/googlePlay.svg";
import phone from "../../assets/img/iPhoneSpaceBlackFront.svg";
import phone2 from "../../assets/img/iPhoneSpaceBlackRight.svg";
import bgPhone from "../../assets/icon/bgPhone.svg";
import AOS from "aos";
import { functions } from "../../store/globalState";

export default function BoxMid2() {
  const { redirect } = functions();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // Чтобы срабатывало повторно
    });
  });
  return (
    <div className="box-mid2">
      <h1 data-aos={"fade-down"} data-aos-duration="700">
        сервисный трафик
      </h1>
      <div className="box-mid2-content">
        <div>
          <h1>Сервисный тариф:</h1>
          <p>
            Заказ пропуска осуществляется через мобильное приложение{" "}
            <a href="">PRIME PARK APP</a> <br />
            Для башен Hyde Park Tower, Gorky Park Tower, Imperial Park Tower и
            Regent's Park Tower, Central Park Tower: 20 минут - бесплатно,
            <br />с 21 минуты - 200 руб. в час. Со 2 часа (с 61 минуты) - 300
            руб. в час.Далее каждый последующий час 300 рублей.
          </p>
        </div>
        <div>
          <h1>Сервисный тариф для негабаритных авто:</h1>
          <p>1 час - бесплатно, 2 час и последующие - 500 руб. в час</p>
        </div>
      </div>
      <AccordionCom
        activeStyle={{
          height: "159px",
        }}
        htmlEl={
          <ul className="ul-box4">
            <li>
              За 1 неделю до окончания подписки, менеджер паркинга свяжется с
              Вами для продления подписки;
            </li>
            <li>
              При повышении категории машиноместа, перерасчет производится по
              стоимости на текущий день и при его наличии.
            </li>
          </ul>
        }
        title="Специальные тарифы за нарушения регламента паркинга комплекса"
        style={{ borderBottomColor: "#545454", width: "100%" }}
      />
      <div className="box-mid2-apk-mobile">
        <div className="box-mid2-apk-mobile-left">
          <div className="box-mid2-apk-mobile-left-header">
            <h1>
              приложение <br />
              prime park
            </h1>
            <h3>prime park app</h3>
          </div>
          <p>
            Единственный цифровой дом в Москве <br /> с дистанционным доступом
            ко всем <br />
            сервисам через смартфон
          </p>
          <div className="box-mid2-apk-mobile-left-get-apk">
            <img
              onClick={() =>
                redirect(
                  "https://apps.apple.com/ru/app/prime-park-app/id1531749823",
                )
              }
              src={appStor}
              alt="app stor"
            />
            <img
              onClick={() =>
                redirect(
                  "https://play.google.com/store/apps/details?id=ru.primepark.android&hl=ru&pli=1",
                )
              }
              src={googlePlay}
              alt="google play"
            />
          </div>
        </div>
        <div className="box-mid2-apk-mobile-right">
          <div>
            <img
              src={phone2}
              data-aos={"fade-up"}
              data-aos-duration="1700"
              data-aos-easing="ease"
              alt="phone"
            />
            <img
              src={phone}
              data-aos={"fade-up"}
              data-aos-duration="1700"
              data-aos-easing="ease"
              alt="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
