import React, { useEffect, useState } from "react";
import contentTopBox42Content1 from "../../assets/icon/content-top-box4-2-content-1.svg";
import contentTopBox42Content2 from "../../assets/icon/content-top-box4-2-content-2.svg";
import contentTopBox42Content3 from "../../assets/icon/content-top-box4-2-content-3.svg";
import contentTopBox42Content4 from "../../assets/icon/content-top-box4-2-content-4.svg";
import AccordionCom from "./componentSite/AccordionCom";
import AOS from "aos";

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
        title: "L1 15-16 м²",
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
        title: "L1 15-16 м²",
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
        title: "L1 15-16 м²",
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
        title: "L1 15-16 м²",
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
        title: "L1 15-16 м²",
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
        title: "L1 15-16 м²",
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
  const [selection, setSelection] = useState(1);
  useEffect(() => {
    AOS.init({});
  }, []);
  console.log("selection", selection);

  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          PRIVATE PARKING
        </h1>
        <p>Приватная зона с индивидуальными парковочными местами</p>
        <h5>
          Выберите удобный формат аренды закреплённого за вами машино-места
        </h5>
      </div>
      <div className="content-top-box4 content-top-box4_1">
        <div className="content-top-box4-0 content-top-box4_1-0">
          <div>
            <h1>Абонементы PRIVATE PARKING</h1>
            <h3>в абонемент PRIVATE PARKING входит:</h3>
            <p>
              Самостоятельная парковка на закреплённом за вами парковочном месте{" "}
              <br />
              Полная уверенность в наличии свободного места в любое время <br />
              Высокий уровень приватности, комфорта и безопасности в парковочной
              зоне
            </p>
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
              <h1>дополнительные услуги private parking</h1>
              <p>
                Подписка Private+ к основному абонементу Private Parking
                расширяет возможности сервиса и открывает доступ к эксклюзивным
                услугам заправки, зарядки, мойки автомобиля и подачи напитков.
              </p>
            </div>
            <div className="content-top-box4-2-header">
              <div>
                <h3>private +</h3>
                <h1>
                  5.000{" "}
                  <span
                    style={{
                      fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                      fontSize: "34px",
                    }}
                  >
                    ₽
                  </span>
                  /мес.
                </h1>
                <p>Стоимость дополнительной подписки</p>
              </div>
              <div>
                <h3>Промо</h3>
                <h1>
                  1.000{" "}
                  <span
                    style={{
                      fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                      fontSize: "34px",
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
                  alt="contentTopBox42Content1"
                />
                <p>Заправка топливом</p>
              </div>
              <div className="content-top-box4-2-content-2">
                <img
                  src={contentTopBox42Content2}
                  alt="contentTopBox42Content2"
                />
                <p>Зарядка электричеством</p>
              </div>
              <div className="content-top-box4-2-content-3">
                <img
                  src={contentTopBox42Content3}
                  alt="contentTopBox42Content3"
                />
                <p>
                  Кофе и напитки <br /> при подаче автомобиля
                </p>
              </div>
              <div className="content-top-box4-2-content-4">
                <img
                  src={contentTopBox42Content4}
                  alt="contentTopBox42Content4"
                />
                <p>Организация мойки</p>
              </div>
            </div>
            <p>
              *Стоимость услуги мойки / топлива / электрозарядки не включена и
              оплачивается дополнительно в соответствии с действующими тарифами.
            </p>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
        {/* <span className="line-545454"></span> */}
        <AccordionCom
          title="Категории машиномест:"
          activeStyle={{
            height: "155px",
          }}
        />
        {/* <span className="line-545454"></span> */}
        <AccordionCom
          activeStyle={{
            height: "252px",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>S - от 13,2 до 13,5 м²;</li>
              <li>M - от 13,5 до 15 м²;</li>
              <li>L1 - от 15 до 16 м²;</li>
              <li>B1, B2 - от 16.1 до 26.2 м²;</li>
              <li>F1, F2 - 2 машиноместа, семейные (зависимые);</li>
              <li>F3 - 3 машиноместа, семейные (зависимые).</li>
            </ul>
          }
          title="Размер машиномест:"
        />
        {/* <span className="line-545454"></span> */}
        <AccordionCom
          info={
            <span
              className="span-box4-1
            "
            >
              Максимальное количество на 1 месяц; {<br />}
              На машиноместа с доступом к электрозарядным станциям
              осуществляется доплата 4 000 руб./мес. {<br />}
              (места обозначаются на карте паркинга специальным символом);Оплата
              подписки осуществляется по 100% предоплате; {<br />}
              Услуга по смене машиноместа в середине подписки возможна на любое
              свободное машиноместо с доплатой разницы стоимости машиномест.
              {<br />}
              Данная услуга оплачивается дополнительно и составляет 2 000
              рублей. {<br />}
              Дополнительная парковочная карта - 1 000 рублей. {<br />}
              Подключение услуги Valet Parking на парковочное место возможно с
              доплатой 7 000 руб./мес. {<br />}
              Мотоместа сдаются в аренду отдельно, тариф начинается от 13 200
              руб./мес. {<br />}
              НДС 5% включен в стоимость услуги.
            </span>
          }
          title="Условия покупки подписки на Private Parking:"
          activeStyle={{
            height: "322px",
          }}
        />
        {/* <span className="line-545454"></span> */}
        <AccordionCom
          activeStyle={{
            height: "136px",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>
                От 30 до 1 дня до окончания подписки - удерживается 30% от
                неиспользованной подписки
              </li>
            </ul>
          }
          title="Условия аннулирования подписки:"
        />
        {/* <span className="line-545454"></span> */}
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
          title="Важно!"
          style={{ borderBottomColor: "#545454" }}
        />
        {/* <span className="line-545454"></span> */}
      </div>
    </div>
  );
}
