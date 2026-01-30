import React, { useEffect } from "react";
import AOS from "aos";
// import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";
import apiClient from "../../utils/apiClient";
import AccordionCom from "./componentSite/AccordionCom";
import { useSore } from "../../store/globalState";
const keys = [
  "box_mid_1_content_1",
  "box_mid_1_content_2",
  "box_mid_1_content_3",
  "box_mid_1_content_4",
  "schema_parking",
  "box_mid_1_title_list_5",
  "box_mid_1_content_list_6",
  "box_mid_1_title_list_7",
  "box_mid_1_content_list_8",
  "ab_1_title",
  "ab_1_price",
  "ab_1_footer",
  "ab_2_title",
  "ab_2_price",
  "ab_2_footer",
  "ab_3_title",
  "ab_3_price",
  "ab_3_footer",
];
export default function BoxMid1() {
  const { dataMain, setData } = useSore();
  const data = dataMain?.boxMid1;
  const getItems = async () => {
    const res = await getData(keys);
    setData({ boxMid1: res });
  };
  useEffect(() => {
    if (!data) getItems();
  }, []);
  // const { redirect } = functions();
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  });

  const onChangeURL = async (key) => {
    try {
      const res = await apiClient(`api/files?key=${key}`);

      if (res.data.data?.fileName.split(".")[1] !== "rar")
        return `${import.meta.env.VITE_PUBLIC_API_URL_FILE}${
          res.data.data?.fileName
        }`;
    } catch (e) {
      console.error(e);
    }
  };

  console.table({ keys, data });

  return (
    <div className="box-mid1">
      <div className="box-mid1-header">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          {data?.[0]}
        </h1>
        <h3>
          {isMobile ? (
            <TextComponent>{data?.[1]}</TextComponent>
          ) : (
            <P>{data?.[1]}</P>
          )}
        </h3>
      </div>
      <div className="box-mid1-content">
        <div>
          {isMobile
            ? data?.[2] && <P>{data?.[2]}</P>
            : data?.[2] && <P>{data?.[2]}</P>}
          {isMobile
            ? data?.[3] && <P>{data?.[3]}</P>
            : data?.[3] && <P>{data?.[3]}</P>}
        </div>
        <nav>
          <button
            onClick={async () => {
              const res = await onChangeURL("schema_parking");
              if (res) {
                window.open(res, "_blank");
                // handleDownload("schema_parking");
              }
            }}
          >
            <span>Ознакомиться со схемой</span>
          </button>
        </nav>
      </div>
      <div>
        <div className="content-top-box4_1-1-com-2">
          <div className="content-top-box4-1-com-4 box-mid1-1">
            <div className="content-top-box4-1-com-title">
              <P>Абонемент</P>
              <P element={"h1"}>{data?.[9]?.toUpperCase()}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[10]} <span className="rouble">₽</span>
              /мес.
            </P>
            <P className="content-top-box4-1-com-footer">{data?.[11]}</P>
          </div>
          <div className="content-top-box4-1-com-4 box-mid1-2">
            <div className="content-top-box4-1-com-title">
              <P>Абонемент</P>
              <P element={"h1"}>{data?.[12]?.toUpperCase()}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[13]} <span className="rouble">₽</span>
              /мес.
            </P>
            <P className="content-top-box4-1-com-footer">{data?.[14]}</P>
          </div>
          <div className="content-top-box4-1-com-4 box-mid1-3">
            <div className="content-top-box4-1-com-title">
              <P>Абонемент</P>
              <P element={"h1"}>{data?.[15]?.toUpperCase()}</P>
            </div>
            <P element={"h3"} className="content-top-box4-1-com-price">
              {data?.[16]} <span className="rouble">₽</span>
              /мес.
            </P>
            <P className="content-top-box4-1-com-footer">{data?.[17]}</P>
          </div>
        </div>
      </div>
      <div className="content-bottom-box4">
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
        <AccordionCom
          title={data?.[7]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[8]?.split("$").map((e, i) => (
                <li key={i}>
                  <TextComponent>{e}</TextComponent>
                </li>
              ))}
            </ul>
          }
        />
        <span id="prevate" className="line-545454"></span>
      </div>
    </div>
  );
}
