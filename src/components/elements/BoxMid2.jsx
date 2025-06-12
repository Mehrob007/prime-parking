import React, { useEffect, useState } from "react";
import AccordionCom from "./componentSite/AccordionCom";
import appStor from "../../assets/icon/appStor.svg";
import googlePlay from "../../assets/icon/googlePlay.svg";
import phone from "../../assets/img/iPhoneSpaceBlackFront.png";
import phone2 from "../../assets/img/iPhoneSpaceBlackRight.png";
import AOS from "aos";
import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";

const keys = [
  "box_mid_2_content_1",
  "box_mid_2_content_2",
  "box_mid_2_content_3",
  "box_mid_2_content_4",
  "box_mid_2_content_5",
  "list_8_title",
  "list_8_content",
  "box_mid_2_1_content_1",
  "box_mid_2_1_content_2",
  "box_mid_2_1_content_3",
];
export default function BoxMid2() {
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
        {data?.[0]}
      </h1>
      <div className="box-mid2-content">
        <div>
          <h1>{data?.[1]}</h1>
          {isMobile ? (
            <P>
              {data?.[2]}
              {/* <TextComponent>
                Заказ пропуска осуществляется через мобильное приложение{" "}
              </TextComponent>
              <label>PRIME PARK APP. {"  "}</label>
              <TextComponent>
                Для башен Hyde Park Tower (R6), Gorky Park Tower (R5), Imperial
                Park Tower (R4) и Regent's Park Tower (R3), Central Park Tower
                (R7): 20 минут - бесплатно, с 21 минуты по 60 минуту - 200
                рублей в час. Со 2 часа (с 61 минуты) - 300 рублей в час. Далее
                каждый последующий час 300 рублей.
              </TextComponent> */}
            </P>
          ) : (
            <p>
              {/* Заказ пропуска осуществляется через мобильное приложение{" "}
              <label>PRIME PARK APP. {"  "}</label> Для башен Hyde Park Tower
              (R6), Gorky Park Tower (R5), Imperial Park Tower (R4) и Regent's
              Park Tower (R3), Central Park Tower (R7): 20 минут - бесплатно, с
              21 минуты по 60 минуту - 200 рублей в час. Со 2 часа (с 61 минуты)
              - 300 рублей в час. Далее каждый последующий час 300 рублей. */}
              {data?.[2]}
            </p>
          )}
        </div>
        <div>
          <h1>{data?.[3]}</h1>
          <p>{data?.[4]}</p>
        </div>
      </div>
      <AccordionCom
        title={data?.[5]}
        activeStyle={{
          height: "auto",
        }}
        htmlEl={
          <ul className="ul-box4">
            {data?.[6]?.split("$").map((e, i) => (
              <li key={i}>
                <TextComponent>{e}</TextComponent>
              </li>
            ))}
          </ul>
        }
      />
      <div className="box-mid2-apk-mobile">
        <div className="box-mid2-apk-mobile-left">
          <div className="box-mid2-apk-mobile-left-header">
            <P element={"h1"}>
              {data?.[7]}
            </P>
            <P element={"h3"}>{data?.[8]}</P>
          </div>
          {isMobile ? (
            <TextComponent>
              {data?.[9]}
            </TextComponent>
          ) : (
            <P>
              {data?.[9]}
            </P>
          )}

          <div className="box-mid2-apk-mobile-left-get-apk">
            <img
              onClick={() =>
                redirect(
                  "https://apps.apple.com/ru/app/prime-park-app/id1531749823",
                )
              }
              src={appStor}
              alt=" "
            />
            <img
              onClick={() =>
                redirect(
                  "https://play.google.com/store/apps/details?id=ru.primepark.android&hl=ru&pli=1",
                )
              }
              src={googlePlay}
              alt=" "
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
              alt=" "
            />
            <img
              src={phone}
              data-aos={"fade-up"}
              data-aos-duration="1700"
              data-aos-easing="ease"
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
