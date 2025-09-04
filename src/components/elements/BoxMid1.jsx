import React, { useEffect, useState } from "react";
import AOS from "aos";
// import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";
import apiClient from "../../utils/apiClient";
import AccordionCom from "./componentSite/AccordionCom";
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
];
export default function BoxMid1() {
  const [data, setData] = useState();
  const getItems = async () => {
    const res = await getData(keys);
    console.log("res", res);

    setData(res);
  };
  useEffect(() => {
    getItems();
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
        <span className="line-545454"></span>
      </div>
    </div>
  );
}
