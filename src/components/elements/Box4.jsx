import React, { useEffect } from "react";
import contentTopBox42Content1 from "../../assets/icon/content-top-box4-2-content-1.svg";
import contentTopBox42Content2 from "../../assets/icon/content-top-box4-2-content-2.svg";
import contentTopBox42Content3 from "../../assets/icon/content-top-box4-2-content-3.svg";
import contentTopBox42Content4 from "../../assets/icon/content-top-box4-2-content-4.svg";
import AccordionCom from "./componentSite/AccordionCom";
import AOS from "aos";

export default function Box4() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          Тарифы на Valet Service
        </h1>
        <p>
          -1 уровень паркинга <span>(Услуги премиальных парковщиков)</span>
        </p>
      </div>
      <div className="content-top-box4">
        <div className="content-top-box4-1">
          <div className="content-top-box4-1-com-1">
            <div className="content-top-box4-1-com-title">
              <h1>Valet Service</h1>
              <p>1 месяцa</p>
            </div>
            <h3 className="content-top-box4-1-com-price">32.000 ₽/мес.</h3>
            <div className="content-top-box4-1-com-sub-text">
              <p>
                Активация абонемента с даты покупки, не позднее{" "}
                <span>31.10.2025</span>
              </p>
            </div>
          </div>
          <div className="content-top-box4-1-com-2">
            <div className="content-top-box4-1-com-title">
              <h1>Пакет Valet Service</h1>
              <p>3 месяца</p>
            </div>
            <h3 className="content-top-box4-1-com-price">28.000 ₽/мес.</h3>
            <div className="content-top-box4-1-com-sub-text">
              <p>
                Активация абонемента с любой даты <span>от 14.08.2024</span>
              </p>
              <p>
                Сгорают все неиспользованные дни <span>от 30.11.2025</span>
              </p>
            </div>
          </div>
          <div className="content-top-box4-1-com-3">
            <div className="content-top-box4-1-com-title">
              <h1>Пакет Valet Service</h1>
              <p>6 месяцев</p>
            </div>
            <h3 className="content-top-box4-1-com-price">27.000 ₽/мес.</h3>
            <div className="content-top-box4-1-com-sub-text">
              <p>
                Активация абонемента с любой даты <span>от 14.08.2024</span>
              </p>
              <p>
                Сгорают все неиспользованные дни <span>от 30.11.2025</span>
              </p>
            </div>
          </div>
          <div className="content-top-box4-1-com-4">
            <div className="content-top-box4-1-com-title">
              <h1>Пакет Valet Service</h1>
              <p>12 месяцa</p>
            </div>
            <h3 className="content-top-box4-1-com-price">26.000 ₽/мес.</h3>
            <div className="content-top-box4-1-com-sub-text">
              <p>
                Активация абонемента с любой даты <span>от 14.08.2024</span>
              </p>
              <p>
                Сгорают все неиспользованные дни <span>от 30.11.2025</span>
              </p>
            </div>
          </div>
        </div>
        <div className="content-top-box4-2">
          <div>
            <div className="content-top-box4-2-header">
              <div>
                <h3>Valet +</h3>
                <h1>3.000 ₽/мес.</h1>
                <p>Стоимость дополнительной подписки</p>
              </div>
              <div>
                <h3>Промо</h3>
                <h1>1.000 ₽/мес.</h1>
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
                <p>Зарядка электктричеством</p>
              </div>
              <div className="content-top-box4-2-content-3">
                <img
                  src={contentTopBox42Content3}
                  alt="contentTopBox42Content3"
                />
                <p>Комплиментарный кофе при подаче автомобиля</p>
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
        <AccordionCom
          title="Условия покупки подписки на абонемент Private Valet Service:"
          activeStyle={{
            height: "442px",
          }}
          info={
            <span className="span-box4-1">
              Абонементы Private Valet Service действуют только на одну машину;
              <br />
              Добавление второго автомобиля в подписку на абонемент возможно при
              условии, что только одна Valet-сессия <br /> может быть активна
              для одного из двух автомобилей (с доплатой 5 000 рублей в месяц).{" "}
              <br />В случае, если два авто стоят одновременно, то идет гостевой
              тариф 250 рублей/час; <br /> В случае отсутствия активного
              абонемента по причине отсутствия своевременной оплаты, <br />{" "}
              тариф меняется на 250 руб./час с даты окончания абонемента; <br />{" "}
              Машину по абонементу можно менять не чаще 2 раз в месяц; <br />{" "}
              Минимальное количество подписки - 1 месяц; <br /> В случае
              несвоевременного поступления предоплаты за выбранный Вами пакет
              Private Valet, <br /> тариф меняется на "месячный абонемент";{" "}
              <br /> При отсутствии возможности оказания сервиса, Пользователь
              уведомляется за 14 календарных дней, <br /> при этом стоимость
              неиспользованной подписки на Valet Service возвращается. <br />
              Оплата подписки осуществляется по 100% предоплате. <br /> НДС 5%
              включен в стоимость услуги.
            </span>
          }
        />
        <AccordionCom
          title="Условия аннулирования подписки:"
          activeStyle={{
            height: "182px",
          }}
          info={
            <ul className="ul-box4">
              <li>
                От 30 до 1 дня до окончания подписки - удерживается 30% от
                неиспользованной подписки;
              </li>
              <li>
                От 60 до 31 дня до окончания подписки - удерживается 15% от
                неиспользованной подписки;
              </li>
              <li>
                От 61 и более дней - удерживается 10% от неиспользованной
                подписки.
              </li>
            </ul>
          }
        />
        <AccordionCom
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
        />
        <AccordionCom
          title="Условия использования часового тарифа:"
          activeStyle={{
            height: "183px",
          }}
          info={
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
          info={
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
        />
      </div>
    </div>
  );
}
