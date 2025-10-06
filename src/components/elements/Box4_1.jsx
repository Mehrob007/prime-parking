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
import apiClient from "../../utils/apiClient";

// const defDataARR = [
//   {
//     id: 1,
//     title: "VIP",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `39.000`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `42.000`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `44.250`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `45.750`,
//       },
//       {
//         title: "B2 17-26,2 м²",
//         price: `48.000`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `67.500`,
//       },
//       {
//         title: "F2 2x2 м",
//         price: `68.625`,
//       },
//       {
//         title: "F3 3м/м",
//         price: `115.388`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Platinum",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `36.000`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `49.000`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `41.250`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `42.750`,
//       },
//       {
//         title: "B2 17-26,2 м²",
//         price: `45.000`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `59.250`,
//       },
//       {
//         title: "F2 2x2 м",
//         price: `61.500`,
//       },
//       {
//         title: "F3 3м/м",
//         price: `96.900`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "GOLD",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `34.500`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `36.000`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `37.500`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `39.000`,
//       },
//       {
//         title: "B2 17-26,2 м²",
//         price: `41.250`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `51.750`,
//       },
//       {
//         title: "F2 2x2 м",
//         price: `54.000`,
//       },
//       {
//         title: "F3 3м/м",
//         price: `92.900`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "SILVER",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `32.250`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `34.050`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `35.550`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `36.750`,
//       },
//       {
//         title: "B2 17-26,2 м²",
//         price: `37.500`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `51.075`,
//       },
//       {
//         title: "F2 2x2 м",
//         price: `53.325`,
//       },
//       {
//         title: "F3 3м/м",
//         price: `89.250`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "GREEN",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `30.000`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `31.800`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `33.300`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `36.000`,
//       },
//       {
//         title: "B2 17-26,2 м²",
//         price: `36.750`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `45.000`,
//       },
//       {
//         title: "F3 3м/м",
//         price: `66.600`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "WHITE",
//     content: [
//       {
//         title: "S 13,2-13-5 м²",
//         price: `28.500`,
//       },
//       {
//         title: "M 13,5-15 м²",
//         price: `29.550`,
//       },
//       {
//         title: "L 15-16 м²",
//         price: `32.250`,
//       },
//       {
//         title: "B1 16,1-17 м²",
//         price: `34.500`,
//       },
//       {
//         title: "F1 2x2 м",
//         price: `42.750`,
//       },
//     ],
//     subContent: [
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `13.200`,
//       },
//       {
//         title: "Мото 5,3-83,4 м²",
//         price: `14.300`,
//       },
//     ],
//   },
// ];
const keys = [
  "box4_1_content_1",
  "box4_1_content_2",
  "box4_1_content_3",
  "box4_1_content_1_1",
  "box4_1_content_1_2",
  "box4_1_content_1_3",
  "dataArrBox4_1",
  "box4_1_content_2_1",
  "box4_1_content_2_2",
  "box4_1_content_4",
  "box4_1_content_5",
  "box4_1_content_6",
  "box4_1_content_7",
  "box4_1_content_8",
  "box4_1_content_9",
  "box4_1_content_10",
  "box4_1_content_11",
  "box4_1_content_12",
  "box4_1_content_13",
  "box4_1_content_14",
  "list_4_title",
  "list_4_content",
  "list_5_title",
  "list_5_content",
  "list_6_title",
  "list_6_content",
  "list_7_title",
  "list_7_content",
  "list_title_PRIVATE",
];
export default function Box4_1() {
  const [defDataARR, setDefDataARR] = useState([]);
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
  const [selection, setSelection] = useState(1);
  const onChangeURL = async (key) => {
    try {
      const res = await apiClient(`api/files?key=${key}`);
      return `${import.meta.env.VITE_PUBLIC_API_URL_FILE}${
        res.data.data?.fileName
      }`;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    if (data?.[6]) {
      setDefDataARR(JSON.parse(data?.[6]));
    }
  }, [data?.[6]]);

  return (
    <div className="box4-main">
      <div className="header-box4">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          {/* PRIVATE PARKING */}
          {data?.[0]}
        </h1>
        <P>{data?.[1]}</P>
        <h5>
          <P>{data?.[2]}</P>
        </h5>
      </div>
      <div className="content-top-box4 content-top-box4_1">
        <div className="content-top-box4-0 content-top-box4_1-0">
          <div>
            <P element={"h1"}>{data?.[3]}</P>
            <P element={"h3"}>{data?.[4]}</P>
            {isMobile ? (
              <P>
                {/* <TextComponent>
                  Самостоятельная парковка на закреплённом за вами парковочном
                  месте{" "}
                </TextComponent>
                <br />
                <TextComponent>
                  Полная уверенность в наличии свободного места в любое время{" "}
                </TextComponent>
                <br />
                <TextComponent>
                  Высокий уровень приватности, комфорта и безопасности в
                  парковочной зоне
                </TextComponent> */}
                {data?.[5]?.split("\n")?.map((e, i) => (
                  <div>
                    <TextComponent key={i}>{e}</TextComponent> <br />
                  </div>
                ))}
              </P>
            ) : (
              <P>{data?.[5]}</P>
            )}
          </div>
        </div>
        <div className="content-navigate-box4_1">
          {defDataARR &&
            defDataARR?.map((prev, i) => (
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
          {defDataARR &&
            defDataARR
              ?.filter((e) => e.id === selection)
              ?.map((prev) => (
                <>
                  <div className="content-top-box4_1-1-com-1">
                    {prev.content.map((e, i) => (
                      <div key={i}>
                        <h1>{e.title}</h1>
                        <p>
                          {e.price} <span className="rouble">₽</span>
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
                            {e.price} <span className="rouble">₽</span>
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
              <P element={"h1"}>{data?.[7]}</P>
              {isMobile ? (
                <TextComponent>{data?.[8]}</TextComponent>
              ) : (
                <p>{data?.[8]}</p>
              )}
            </div>
            <div className="content-top-box4-2-header">
              {/* <div>
                <h3>{data?.[9]}</h3>
                <h1>
                  {data?.[10]}{" "}
                  <span
                    className="rouble"
                    style={{
                      fontSize: isMobile ? "24px" : "34px",
                    }}
                  >
                    ₽
                  </span>
                  /мес.
                </h1>
                <P> {data?.[11]}</P>
              </div> */}
              <div className="test">
                <h3> {data?.[12]}</h3>
                <h1>
                  {data?.[13]}{" "}
                  <span
                    className="rouble"
                    style={{
                      fontSize: isMobile ? "24px" : "34px",
                    }}
                  >
                    ₽
                  </span>
                  /мес.
                </h1>
                <P> {data?.[14]}</P>
              </div>
            </div>
            <div className="content-top-box4-2-content">
              <div className="content-top-box4-2-content-1">
                <img src={contentTopBox42Content1} alt=" " />
                <P> {data?.[15]}</P>
              </div>
              <div className="content-top-box4-2-content-2">
                <img src={contentTopBox42Content2} alt=" " />
                <P> {data?.[16]}</P>
              </div>
              <div className="content-top-box4-2-content-3">
                <img src={contentTopBox42Content3} alt=" " />
                <P>{data?.[17]}</P>
              </div>
              <div className="content-top-box4-2-content-4">
                <img src={contentTopBox42Content4} alt=" " />
                <P> {data?.[18]}</P>
              </div>
            </div>
            <TextComponent>{data?.[19]}</TextComponent>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
        <AccordionCom
          title={data?.[28]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              <li></li>
              <li>
                <a
                  className="file_content_2"
                  onClick={async () => {
                    const res = await onChangeURL("list_file_PRIVATE");
                    if (res) {
                      window.open(res, "_blank");
                      // handleDownload(res);
                    }
                  }}
                >
                  Ссылка на условия пользования подпиской
                </a>
              </li>
            </ul>
          }
        />
        <AccordionCom
          title={data?.[20]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[21]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <AccordionCom
          title={data?.[22]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[23]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <AccordionCom
          title={data?.[24]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[25]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <AccordionCom
          title={data?.[26]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[27]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <span className="line-545454"></span>
      </div>
    </div>
  );
}
