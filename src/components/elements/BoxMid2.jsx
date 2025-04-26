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
            <label>PRIME PARK APP</label> <br />
            Для башен Hyde Park Tower (R6), Gorky Park Tower (R5), Imperial Park
            Tower (R4) и Regent's Park Tower (R3), <br /> Central Park Tower
            (R7): 20 минут - бесплатно, с 21 минуты по 60 минуту - 200 рублей в
            час. <br /> Со 2 часа (с 61 минуты) - 300 рублей в час. Далее каждый
            последующий час 300 рублей.
          </p>
        </div>
        <div>
          <h1>Сервисный тариф для негабаритных авто:</h1>
          <p>1 час - бесплатно, 2 час и последующие - 500 руб. в час.</p>
        </div>
      </div>
      <AccordionCom
        activeStyle={{
          height: "377px",
        }}
        htmlEl={
          <ul
            className="ul-box4"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <li>
              <p> Стоянка в неположенной зоне: 1 000 рублей.</p>
            </li>
            <li>
              <p>
                <a target="_blank" href="https://drive.google.com/drive/folders/1o0xhz5Y7ns4KADmx7448SNShufX3LkiJ?usp=drive_link">
                  Ссылка на зоны
                </a>{" "}
                Hyde Park Tower (R6), Gorky Park Tower (R5), Imperial Park Tower
                (R4).
              </p>
            </li>
            <li>
              <p>
                <a target="_blank" href="https://drive.google.com/drive/folders/1к_3Y8NxEkoEzklQqamKWFGAza90bs-_6J?usp=drive_link">
                  Ссылка на зоны
                </a>{" "}
                Regent's Park Tower (R3).
              </p>
            </li>
            <li>
              <p>
                <a target="_blank" href="https://drive.google.com/drive/folders/1kr7hJFkpsThmRow8rb1BdHT2TDpxDEzE?usp=drive_link">
                  Ссылка на зоны
                </a>{" "}
                Central Park Tower (R7).
              </p>
            </li>
            <li>
              <p>Заезд на разметку парковочного места: 500 рублей.</p>
            </li>
            <li>
              <p>Разгрузка/ погрузка на проезжей части: 1 500 рублей.</p>
            </li>
            <li>
              <p>Потеря парковочной карты: 5 000 рублей.</p>
            </li>
            <li>
              <p>
                Нарушение правил паркинга и/или договора оферты: 5 000 рублей в
                день (1 день - с 00:01 до 23:59)
              </p>
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
