import React, { useEffect, useState } from "react";
import contentTopBox42Content1 from "../../assets/icon/content-top-box4-2-content-1.svg";
import contentTopBox42Content2 from "../../assets/icon/content-top-box4-2-content-2.svg";
import contentTopBox42Content3 from "../../assets/icon/content-top-box4-2-content-3.svg";
import contentTopBox42Content4 from "../../assets/icon/content-top-box4-2-content-4.svg";
import AccordionCom from "./componentSite/AccordionCom";
import AOS from "aos";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";

const keys = [
  "",
  "box4_content_1",
  "box4_content_2",
  "box4_content_3",
  "box4_content_4",
  "box4_content_5",
  "box4_content_6",
  "box4_content_7",
  "box4_content_8",
  "box4_content_9",
  "box4_content_10",
  "box4_content_11",
  "box4_content_12",
  "box4_content_13",
  "box4_content_14",
  "box4_content_15",
  "box4_content_16",
  "box4_content_17",
  "box4_content_18",
  "box4_content_19",
  "box4_content_20",
  "box4_content_21",
  "box4_content_22",
  "box4_content_23",
  "box4_content_24",
  "box4_content_25",
  "box4_content_28",
  "box4_content_27",
  "box4_content_29",
  "box4_content_30",
  "box4_content_31",
  "box4_content_32",
  "box4_content_33",
  "box4_content_34",
  "box4_content_35",
  "box4_content_36",
  "box4_content_37",
  "list_1_title",
  "list_1_content",
  "list_2_title",
  "list_2_content",
  "list_3_title",
  "list_3_content",
];
export default function Box4() {
  const [data, setData] = useState();
  const getItems = async () => {
    const res = await getData(keys);
    console.log("res", res);

    setData(res);
  };
  useEffect(() => {
    getItems();
  }, []);
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          {data?.[1]}
        </h1>
        <P>{data?.[2]}</P>
      </div>
      <div className="content-top-box4">
        <div className="content-top-box4-0 content-top-bg-box4">
          <div>
            <P element={"h1"}>{data?.[3]}</P>
            <P element={"h3"}>{data?.[4]}</P>
            {isMobile ? (
              <TextComponent>{data?.[5]}</TextComponent>
            ) : (
              <P>{data?.[5]}</P>
            )}
          </div>
        </div>
        <div className="content-top-box4-1">
          <div className="content-top-box4-1-com-1">
            <div className="content-top-box4-1-com-title">
              <P>{data?.[6]}</P>
              <P element={"h1"}>{data?.[7]}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[8]} <span className="rouble">₽</span>
              /мес.
            </P>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>{data?.[9]}</TextComponent>
              ) : (
                <P>{data?.[9]}</P>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-2">
            <div className="content-top-box4-1-com-title">
              <P>{data?.[10]}</P>
              <P element={"h1"}>{data?.[11]}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[12]} <span className="rouble">₽</span>
              /мес.
            </P>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>{data?.[13]}</TextComponent>
              ) : (
                <P>{data?.[13]}</P>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-3">
            <div className="content-top-box4-1-com-title">
              <P>{data?.[14]}</P>
              <P element={"h1"}>{data?.[15]}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[16]} <span className="rouble">₽</span>
              /мес.
            </P>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent>{data?.[17]}</TextComponent>
              ) : (
                <p>{data?.[17]}</p>
              )}
            </div>
          </div>
          <div className="content-top-box4-1-com-4">
            <div className="content-top-box4-1-com-title">
              <P>{data?.[18]}</P>
              <P element={"h1"}>{data?.[19]}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[20]} <span className="rouble">₽</span>
              /мес.
            </P>
            <div className="content-top-box4-1-com-sub-text">
              {isMobile ? (
                <TextComponent> {data?.[21]}</TextComponent>
              ) : (
                <P>{data?.[21]}</P>
              )}
            </div>
          </div>
        </div>
        <div className="content-top-box4-2">
          <div>
            <div className="content-top-box4-2-title">
              <P element={"h1"}>{data?.[22]}</P>
                {isMobile ? (
                  <TextComponent>{data?.[23]}</TextComponent>
                ) : (
                  <P>{data?.[23]}</P>
                )}
            </div>
            <div className="content-top-box4-2-header">
              {/* <div>
                <P element={"h3"}>{data?.[24]}</P>
                <h1>
                  {data?.[25]} <span className="rouble">₽</span>
                  /мес.
                </h1>
                <P>{data?.[26]}</P>
              </div> */}
              <div>
                <P element={"h3"}>{data?.[27]}</P>
                <h1>
                  {data?.[28]} <span className="rouble">₽</span>
                  /мес.
                </h1>
                <P>{data?.[29]}</P>
              </div>
            </div>
            <div className="content-top-box4-2-content">
              <div className="content-top-box4-2-content-1">
                <img src={contentTopBox42Content1} alt=" " />
                <P>{data?.[30]}</P>
              </div>
              <div className="content-top-box4-2-content-2">
                <img src={contentTopBox42Content2} alt=" " />
                <P>{data?.[31]}</P>
              </div>
              <div className="content-top-box4-2-content-3">
                <img src={contentTopBox42Content3} alt=" " />
                <P>{data?.[32]}</P>
              </div>
              <div className="content-top-box4-2-content-4">
                <img src={contentTopBox42Content4} alt=" " />
                <P>{data?.[33]}</P>
              </div>
            </div>
            <TextComponent>{data?.[34]}</TextComponent>
            <div className="content-top-box4-2-title">
              <P element={"h1"}>{data?.[35]}</P>
              {isMobile ? (
                <TextComponent>{data?.[36]}</TextComponent>
              ) : (
                <P>{data?.[36]}</P>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
        <AccordionCom
          title={data?.[37]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[38]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <AccordionCom
          title={data?.[39]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[40]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <AccordionCom
          title={data?.[41]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[42]?.split("$")?.map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
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
