import React, { useEffect } from "react";
import contentTopBox42Content1 from "../../assets/icon/content-top-box4-2-content-1.svg";
import contentTopBox42Content2 from "../../assets/icon/content-top-box4-2-content-2.svg";
import contentTopBox42Content3 from "../../assets/icon/content-top-box4-2-content-3.svg";
import contentTopBox42Content4 from "../../assets/icon/content-top-box4-2-content-4.svg";
import AccordionCom from "./componentSite/AccordionCom";
import AOS from "aos";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";

export default function Box4() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          VALET SERVICE
        </h1>
        <p>УСЛУГИ ПРЕМИАЛЬНЫХ {isMobile && <br />} ПАРКОВЩИКОВ</p>
      </div>
      <div className="content-top-box4">
        <div className="content-top-box4-0 content-top-bg-box4">
          <div>
            <h1>Абонементы {isMobile && <br />} VALET service</h1>
            <h3>в абонемент {isMobile && <br />} VALET-serviСe входит:</h3>
            {isMobile ? (
              <TextComponent>
                Прием автомобиля у лобби и подача автомобиля на -1 уровне 
                Размещение автомобиля на подземный паркинг сотрудником
                Валет-сервиса
              </TextComponent>
            ) : (
              <p>
                Прием автомобиля у лобби и подача {isMobile && <br />}{" "}
                автомобиля на -1 уровне <br /> {isMobile && <br />}
                Размещение автомобиля {isMobile && <br />} на подземный паркинг
                сотрудником {isMobile && <br />}
                Валет-сервиса
              </p>
            )}
          </div>
        </div>
        <div className="content-top-box4-1">
          <div className="content-top-box4-1-com-1">
            <div className="content-top-box4-1-com-title">
              <p>Абонемент</p>
              <h1>на 1 месяц</h1>
            </div>
            <h3 className="content-top-box4-1-com-price">
              32.000{" "}
              <span
                style={{
                  fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                }}
              >
                ₽
              </span>
              /мес.
            </h3>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>
                  *Активация абонемента с даты покупки Сгорают все
                  неиспользованные дни по истечению срока действия абонемента
                </TextComponent>
              ) : (
                <p>
                  *Активация абонемента с даты покупки <br /> Сгорают все
                  неиспользованные дни {isMobile && <br />} по истечению{" "}
                  {!isMobile && <br />} срока действия абонемента
                </p>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-2">
            <div className="content-top-box4-1-com-title">
              <p>Абонемент</p>
              <h1>на 3 месяца</h1>
            </div>
            <h3 className="content-top-box4-1-com-price">
              28.000{" "}
              <span
                style={{
                  fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                }}
              >
                ₽
              </span>
              /мес.
            </h3>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>
                  *Активация абонемента с даты покупки Сгорают все
                  неиспользованные дни по истечению срока действия абонемента
                </TextComponent>
              ) : (
                <p>
                  *Активация абонемента с даты покупки <br /> Сгорают все
                  неиспользованные дни {isMobile && <br />} по истечению{" "}
                  {!isMobile && <br />} срока действия абонемента
                </p>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-3">
            <div className="content-top-box4-1-com-title">
              <p>Абонемент</p>
              <h1>на 6 месяцев</h1>
            </div>
            <h3 className="content-top-box4-1-com-price">
              27.000{" "}
              <span
                style={{
                  fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                }}
              >
                ₽
              </span>
              /мес.
            </h3>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>
                  *Активация абонемента с даты покупки Сгорают все
                  неиспользованные дни по истечению срока действия абонемента
                </TextComponent>
              ) : (
                <p>
                  *Активация абонемента с даты покупки <br /> Сгорают все
                  неиспользованные дни {isMobile && <br />} по истечению{" "}
                  {!isMobile && <br />} срока действия абонемента
                </p>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-4">
            <div className="content-top-box4-1-com-title">
              <p>Абонемент</p>
              <h1>на 12 месяцев</h1>
            </div>
            <h3 className="content-top-box4-1-com-price">
              26.000{" "}
              <span
                style={{
                  fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
                }}
              >
                ₽
              </span>
              /мес.
            </h3>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>
                  {" "}
                  *Активация абонемента с даты покупки Сгорают все
                  неиспользованные дни по истечению срока действия абонемента
                </TextComponent>
              ) : (
                <p>
                  *Активация абонемента с даты покупки <br /> Сгорают все
                  неиспользованные дни {isMobile && <br />} по истечению{" "}
                  {!isMobile && <br />} срока действия абонемента
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="content-top-box4-2">
          <div>
            <div className="content-top-box4-2-title">
              <h1>
                дополнительные {isMobile && <br />} услуги VALET{" "}
                {isMobile && <br />} service
              </h1>
              {isMobile ? (
                <TextComponent>
                  Подписка Valet+ к основному абонементу Valet Service расширяет
                  возможности сервиса и открывает доступ к эксклюзивным услугам
                  заправки, зарядки, мойки автомобиля и подачи напитков.
                </TextComponent>
              ) : (
                <p>
                  Подписка Valet+ к основному {isMobile && <br />} абонементу
                  Valet Service расширяет {isMobile && <br />}
                  возможности сервиса и открывает {isMobile && <br />} доступ к
                  эксклюзивным услугам {isMobile && <br />}
                  заправки, зарядки, мойки автомобиля и подачи напитков.
                </p>
              )}
            </div>
            <div className="content-top-box4-2-header">
              <div>
                <h3>Valet +</h3>
                <h1>
                  3.000{" "}
                  <span
                    style={{
                      fontFamily: `"Segoe UI Variable", "Segoe UI", sans-serif`,
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
                  Кофе и напитки <br />
                  при подаче автомобиля
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
            <TextComponent>
              *Стоимость услуги мойки / топлива / электрозарядки не включена и
              оплачивается дополнительно в соответствии с действующими тарифами.
            </TextComponent>
            <div className="content-top-box4-2-title">
              <h1>гостевой VALET service</h1>
              {isMobile ? (
                <TextComponent>
                  Парковка гостей с помощью услуги Valet Service с передачей и
                  получением автомобиля у лобби. Тариф: 250 руб./час
                </TextComponent>
              ) : (
                <p>
                  Парковка гостей с помощью услуги {isMobile && <br />} Valet
                  Service с передачей и получением {isMobile && <br />}{" "}
                  автомобиля у лобби. Тариф: {isMobile && <br />} 250 руб./час
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
        <AccordionCom
          title="Условия покупки подписки на абонемент Valet Service:"
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>
                <TextComponent>
                  Абонементы Valet Service действуют только на одну машину;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Добавление второго автомобиля в подписку на абонемент возможно
                  при условии, что только одна Valet-сессия может быть активна
                  для одного из двух автомобилей (с доплатой 5 000 рублей в
                  месяц).
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  В случае, если два авто стоят одновременно, то идет гостевой
                  тариф 250 рублей/час;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  В случае отсутствия активного абонемента по причине отсутствия
                  своевременной оплаты, тариф меняется на 250 руб./час с даты
                  окончания абонемента;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Машину по абонементу можно менять не чаще 2 раз в месяц;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Оплата подписки осуществляется по 100% предоплате.
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  НДС 7% включен в стоимость услуги.
                </TextComponent>
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
            <ul className="ul-box4">
              <li>
                <TextComponent>
                  От 30 до 1 дня до окончания подписки - удерживается 30% от
                  неиспользованной подписки;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  От 60 до 31 дня до окончания подписки - удерживается 15% от
                  неиспользованной подписки;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  От 61 и более дней - удерживается 10% от неиспользованной
                  подписки.
                </TextComponent>
              </li>
            </ul>
          }
        />
        <AccordionCom
          title="Условия использования часового тарифа"
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>
                <TextComponent>
                  Бесплатное время указано в тарифе, если оно есть;
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  Неполный час округляется до полного часа.
                </TextComponent>
              </li>
              <li>
                <TextComponent>
                  После услуг, оказанных автомойкой, 3 часа парковки
                  предоставляются бесплатно, далее 150 рублей в час.
                </TextComponent>
              </li>
            </ul>
          }
        />
        <span className="line-545454"></span>
        {/* <AccordionCom
          title="Категории машиномест:"
          infoOff={false}
          activeStyle={{
            height: "367px",
          }}
          htmlEl={
            <div className="box4-info3">
              <div>
                <h1>Valet гостевой:</h1>
                <p>250 руб./час.</p>
              </div>
              <div>
                <h1>Сервисный тариф:</h1>
                <p>
                  Для башен Hyde Park Tower, Gorky Park Tower, Imperial Park
                  Tower и Regent's Park Tower, Central Park Tower: <br /> 20
                  минут - бесплатно, с 21 минуты - 200 рублей в час. Со 2 часа
                  (с 61 минуты) - 300 рублей в час. <br /> Далее каждый
                  последующий час 300 рублей.
                </p>
              </div>
              <div>
                <h1>Сервисный тариф для негабаритных авто:</h1>
                <p>1 час - бесплатно, 2 час и последующие - 500 рублей в час</p>
              </div>
            </div>
          }
        /> */}
        {/* <AccordionCom
          title="Условия использования часового тарифа:"
          activeStyle={{
            height: "183px",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li>Бесплатное время указано в тарифе, если оно есть;</li>
              <li>Неполный час округляется до полного часа.</li>
              <li>
                После услуг, оказанных автомойкой, 3 часа парковки
                предоставляются бесплатно, далее 150 рублей в час
              </li>
            </ul>
          }
        />
        <AccordionCom
          title="Специальные тарифы за нарушения регламента паркинга комплекса"
          style={{ borderBottomColor: "#545454" }}
          activeStyle={{
            height: "299px",
          }}
          htmlEl={
            <ol className="ol-box4">
              <li>
                Стоянка в неположенной зоне: 1 000 рублей -
                <ul>
                  <li>
                    <a href="">Ссылка на зоны</a> Hyde Park Tower, Gorky Park
                    Tower, Imperial Park Tower,
                  </li>
                  <li>
                    <a href="">Ссылка на зоны</a> Regent's Park Tower,
                  </li>
                  <li>
                    <a href="">Ссылка на зоны</a> Central Park Tower.
                  </li>
                </ul>
              </li>
              <li>Заезд на разметку парковочного места: 500 рублей</li>
              <li>Разгрузка/ погрузка на проезжей части: 1 500 рублей</li>
              <li>Потеря парковочной карты: 5 000 рублей</li>
              <li>
                Нарушение правил паркинга и/или договора оферты: 5 000 рублей в
                день (1 день - с 00:01 до 23:59)
              </li>
            </ol>
          }
        /> */}
      </div>
    </div>
  );
}
