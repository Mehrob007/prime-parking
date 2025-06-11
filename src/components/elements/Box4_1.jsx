import React, { useEffect, useState } from "react";
import contentTopBox42Content1 from "../../assets/icon/content-top-box4-2-content-1.svg";
import contentTopBox42Content2 from "../../assets/icon/content-top-box4-2-content-2.svg";
import contentTopBox42Content3 from "../../assets/icon/content-top-box4-2-content-3.svg";
import contentTopBox42Content4 from "../../assets/icon/content-top-box4-2-content-4.svg";
import AccordionCom from "./componentSite/AccordionCom";
import AOS from "aos";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";

const defDataARR = [
  {
    id: 1,
    title: "VIP",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `39.000`,
      },
      {
        title: "M 13,5-15 м²",
        price: `42.000`,
      },
      {
        title: "L 15-16 м²",
        price: `44.250`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `45.750`,
      },
      {
        title: "B2 17-26,2 м²",
        price: `48.000`,
      },
      {
        title: "F1 2x2 м",
        price: `67.500`,
      },
      {
        title: "F2 2x2 м",
        price: `68.625`,
      },
      {
        title: "F3 3м/м",
        price: `115.388`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
  {
    id: 2,
    title: "Platinum",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `36.000`,
      },
      {
        title: "M 13,5-15 м²",
        price: `49.000`,
      },
      {
        title: "L 15-16 м²",
        price: `41.250`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `42.750`,
      },
      {
        title: "B2 17-26,2 м²",
        price: `45.000`,
      },
      {
        title: "F1 2x2 м",
        price: `59.250`,
      },
      {
        title: "F2 2x2 м",
        price: `61.500`,
      },
      {
        title: "F3 3м/м",
        price: `96.900`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
  {
    id: 3,
    title: "GOLD",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `34.500`,
      },
      {
        title: "M 13,5-15 м²",
        price: `36.000`,
      },
      {
        title: "L 15-16 м²",
        price: `37.500`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `39.000`,
      },
      {
        title: "B2 17-26,2 м²",
        price: `41.250`,
      },
      {
        title: "F1 2x2 м",
        price: `51.750`,
      },
      {
        title: "F2 2x2 м",
        price: `54.000`,
      },
      {
        title: "F3 3м/м",
        price: `92.900`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
  {
    id: 4,
    title: "SILVER",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `32.250`,
      },
      {
        title: "M 13,5-15 м²",
        price: `34.050`,
      },
      {
        title: "L 15-16 м²",
        price: `35.550`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `36.750`,
      },
      {
        title: "B2 17-26,2 м²",
        price: `37.500`,
      },
      {
        title: "F1 2x2 м",
        price: `51.075`,
      },
      {
        title: "F2 2x2 м",
        price: `53.325`,
      },
      {
        title: "F3 3м/м",
        price: `89.250`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
  {
    id: 5,
    title: "GREEN",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `30.000`,
      },
      {
        title: "M 13,5-15 м²",
        price: `31.800`,
      },
      {
        title: "L 15-16 м²",
        price: `33.300`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `36.000`,
      },
      {
        title: "B2 17-26,2 м²",
        price: `36.750`,
      },
      {
        title: "F1 2x2 м",
        price: `45.000`,
      },
      {
        title: "F3 3м/м",
        price: `66.600`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
  {
    id: 6,
    title: "WHITE",
    content: [
      {
        title: "S 13,2-13-5 м²",
        price: `28.500`,
      },
      {
        title: "M 13,5-15 м²",
        price: `29.550`,
      },
      {
        title: "L 15-16 м²",
        price: `32.250`,
      },
      {
        title: "B1 16,1-17 м²",
        price: `34.500`,
      },
      {
        title: "F1 2x2 м",
        price: `42.750`,
      },
    ],
    subContent: [
      {
        title: "Мото 5,3-83,4 м²",
        price: `13.200`,
      },
      {
        title: "Мото 5,3-83,4 м²",
        price: `14.300`,
      },
    ],
  },
];

export default function Box4_1() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selection, setSelection] = useState(1);
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          PRIVATE PARKING
        </h1>
        <TextComponent>Приватная зона с индивидуальными парковочными местами</TextComponent>
        <h5>
           <TextComponent>Выберите удобный формат аренды закреплённого за вами машино-места</TextComponent>
        </h5>
      </div>
      <div className="content-top-box4 content-top-box4_1">
        <div className="content-top-box4-0 content-top-box4_1-0">
          <div>
            <h1>Абонементы {isMobile && <br />} PRIVATE PARKING</h1>
            <h3>в абонемент PRIVATE {isMobile && <br />} PARKING входит:</h3>
            {isMobile ? (
              <p>
                <TextComponent>
                  Самостоятельная парковка на закреплённом за вами парковочном
                  месте{" "}
                </TextComponent><br />
                <TextComponent>
                  Полная уверенность в наличии свободного места в любое время{" "}
                </TextComponent><br />
                <TextComponent>
                  Высокий уровень приватности, комфорта и безопасности в
                  парковочной зоне
                </TextComponent>
              </p>
            ) : (
              <p>
                Самостоятельная парковка {isMobile && <br />} на закреплённом за
                вами {isMobile && <br />} парковочном месте <br />
                {isMobile && <br />}
                Полная уверенность в наличии {isMobile && <br />} свободного
                места в любое время <br /> {isMobile && <br />}
                Высокий уровень приватности, {isMobile && <br />} комфорта и
                безопасности {isMobile && <br />} в парковочной зоне
              </p>
            )}
          </div>
        </div>
        <div className="content-navigate-box4_1">
          {defDataARR.map((prev, i) => (
            <div
              key={i}
              onClick={() => setSelection(prev.id)}
              className={`${
                prev.id === selection ? "active-content-navigate-box4_1" : ""
              }`}
            >
              <h1>{prev.title}</h1>
            </div>
          ))}
        </div>

        <div className="content-top-box4_1-1">
          {defDataARR
            .filter((e) => e.id === selection)
            .map((prev) => (
              <>
                <div className="content-top-box4_1-1-com-1">
                  {prev.content.map((e, i) => (
                    <div key={i}>
                      <h1>{e.title}</h1>
                      <p>
                        {e.price}{" "}
                        <span
                          style={{
                            fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                          }}
                        >
                          ₽
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="content-top-box4_1-1-com-2">
                  {prev.subContent.map((e, i) => (
                    <div
                      key={i}
                      className={`content-top-box4_1-1-com-2-${i + 1}`}
                    >
                      <div>
                        <h1>{e.title}</h1>
                        <p>
                          {e.price}{" "}
                          <span
                            style={{
                              fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                            }}
                          >
                            ₽
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
        </div>
        <div className="content-top-box4_1-2">
          <div>
            <div className="content-top-box4-2-title ">
              <h1>
                дополнительные {isMobile && <br />} услуги private{" "}
                {isMobile && <br />} parking
              </h1>
              {isMobile ? (
                <TextComponent>
                  Подписка Private+ к основному абонементу Private Parking
                  расширяет возможности сервиса и открывает доступ к
                  эксклюзивным услугам заправки, зарядки, мойки автомобиля и
                  подачи напитков.
                </TextComponent>
              ) : (
                <p>
                  Подписка Private+ к основному абонементу Private Parking
                  расширяет возможности сервиса и открывает доступ к
                  эксклюзивным услугам заправки, зарядки, мойки автомобиля{" "}
                  {isMobile && <br />} и подачи напитков.
                </p>
              )}
            </div>
            <div className="content-top-box4-2-header">
              <div>
                <h3>private +</h3>
                <h1>
                  5.000{" "}
                  <span
                    style={{
                      fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                      fontSize: isMobile ? "24px" : "34px",
                    }}
                  >
                    ₽
                  </span>
                  /мес.
                </h1>
                <p>Стоимость дополнительной {isMobile && <br />} подписки</p>
              </div>
              <div>
                <h3>Промо</h3>
                <h1>
                  1.000{" "}
                  <span
                    style={{
                      fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                      fontSize: isMobile ? "24px" : "34px",
                    }}
                  >
                    ₽
                  </span>
                  /мес.
                </h1>
                <p>Первые 3 месяца</p>
              </div>
            </div>
            <div className="content-top-box4-2-content">
              <div className="content-top-box4-2-content-1">
                <img
                  src={contentTopBox42Content1}
                  alt=" "
                />
                <p>Заправка топливом</p>
              </div>
              <div className="content-top-box4-2-content-2">
                <img
                  src={contentTopBox42Content2}
                  alt=" "
                />
                <p>Зарядка электричеством</p>
              </div>
              <div className="content-top-box4-2-content-3">
                <img
                  src={contentTopBox42Content3}
                  alt=" "
                />
                <p>
                  Кофе и напитки <br /> при подаче автомобиля
                </p>
              </div>
              <div className="content-top-box4-2-content-4">
                <img
                  src={contentTopBox42Content4}
                  alt=" "
                />
                <p>Организация мойки</p>
              </div>
            </div>
            <TextComponent>
              *Стоимость услуги мойки / топлива / электрозарядки не включена и
              оплачивается дополнительно в соответствии с действующими тарифами.
            </TextComponent>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
        <AccordionCom
          title="Категории машиномест:"
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>
                <TextComponent>
                  VIP, Platinum, Gold, Silver, Green, White - категория
                  устанавливается в зависимости от удаленности от лифтовой
                  группы и обособленности машиноместа.
                </TextComponent>
              </li>
            </ul>
          }
        />
        <AccordionCom
          title="Размер машиномест:"
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul
              className="ul-box4"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <TextComponent>S - от 13,2 до 13,5 м²;</TextComponent>
              </li>
              <li>
                <TextComponent>M - от 13,5 до 15 м²;</TextComponent>
              </li>
              <li>
                <TextComponent>L - от 15 до 16 м²;</TextComponent>
              </li>
              <li>
                <TextComponent>B1, B2 - от 16.1 до 26.2 м²;</TextComponent>
              </li>
              <li>
                <TextComponent>
                  F1, F2 - 2 машиноместа, семейные (зависимые);
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  F3 - 3 машиноместа, семейные (зависимые).
                </TextComponent>
              </li>
            </ul>
          }
        />
        <AccordionCom
          title={`Условия покупки ${
            isMobile ? "\n" : ""
          } подписки на Private Parking:`}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul
              className="ul-box4"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <TextComponent>
                  Доступный срок действия подписки - 1 месяц;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Для машиномест с доступом к электрозарядным станциям
                  осуществляется доплата 4 000 руб./мес.;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Оплата подписки осуществляется по 100% предоплате;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  За 1 неделю до окончания подписки, менеджер паркинга свяжется
                  с Вами для продления подписки;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Услуга по смене машиноместа в середине срока подписки возможна
                  на любое свободноемашиноместо с доплатой разницы стоимости
                  машиномест. Данная услуга оплачиваетсядополнительно и
                  составляет 2 000 рублей.
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Дополнительная парковочная карта - 1 000 рублей.
                </TextComponent>
              </li>
              <li>
                <TextComponent>НДС 7% включен в стоимость услуги</TextComponent>
              </li>
            </ul>
          }
        />
        <AccordionCom
          title="Условия аннулирования подписки:"
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul
              className="ul-box4"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <li>
                <TextComponent>
                  От 30 до 1 дня до окончания подписки - удерживается 30% от
                  неиспользованной подписки
                </TextComponent>
              </li>
            </ul>
          }
        />
        <span className="line-545454"></span>
      </div>
    </div>
  );
}
