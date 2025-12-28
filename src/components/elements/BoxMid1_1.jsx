import React, { useEffect } from "react";
import AOS from "aos";
// import { functions } from "../../store/globalState";
import appIcon from "../../assets/icon/app-icon.svg";
import gpsIcon from "../../assets/icon/gps-icon.svg";
import iconLineBox3 from "../../assets/icon/icon-line-box3.svg";
import walletIcon from "../../assets/icon/wallet-icon.svg";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";
import apiClient from "../../utils/apiClient";
import AccordionCom from "./componentSite/AccordionCom";
import { useSore } from "../../store/globalState";
const keys = [
  "box_mid_1_1_content_1",
  "box_mid_1_1_content_2",
  "box_mid_1_1_content_3",
  "box_mid_1_1_content_4",
  "box_mid_1_1_content_5",
  "box_mid_1_1_content_6",
  "box_mid_1_1_content_7",
  "box_mid_1_1_title_list_5",
  "box_mid_1_1_content_list_6",
  "box_mid_1_1_title_list_7",
  "box_mid_1_1_content_list_8",
];
export default function BoxMid1_1() {
  const { dataMain, setData } = useSore();
  const data = dataMain?.boxMid1_1;
  const getItems = async () => {
    const res = await getData(keys);
    setData({ boxMid1_1: res });
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
      <div className="box-mid1_1-content">
       {!isMobile && <h1 data-aos={"fade-down"} data-aos-duration="700">
          {data?.[2]}
        </h1>}
        <main>
          <div>
            <img src={appIcon} alt="appIcon" />
            <p>{data?.[3]}</p>
          </div>
          <img src={iconLineBox3} alt=" " />
          <div>
            <img src={gpsIcon} alt="gpsIcon" />
            <p>{data?.[4]}</p>
          </div>
          <img src={iconLineBox3} alt=" " />
          <div>
            <img src={walletIcon} alt="walletIcon" />
            <p>{data?.[5]}</p>
          </div>
        </main>
        <p>{data?.[6]}</p>
      </div>

      <div className="content-bottom-box4">
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
        <AccordionCom
          title={data?.[9]}
          activeStyle={{
            height: "auto",
          }}
          htmlEl={
            <ul className="ul-box4">
              {data?.[10]?.split("$").map((e, i) => (
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
