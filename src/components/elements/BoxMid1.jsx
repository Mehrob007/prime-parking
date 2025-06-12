import React, { useEffect, useState } from "react";
import AOS from "aos";
import { functions } from "../../store/globalState";
import useMediaQuery from "../../function/useMediaQuery";
import TextComponent from "./com/TextComponent";
import { getData } from "../../function/getData";
import P from "./com/P";
const keys = [
  "box_mid_1_content_1",
  "box_mid_1_content_2",
  "box_mid_1_content_3",
  "box_mid_1_content_4",
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
  const { redirect } = functions();
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  });
  return (
    <div className="box-mid1">
      <div className="box-mid1-header">
        <h1 data-aos={"fade-down"} data-aos-duration="700">
          {data?.[0]}
        </h1>
        <h3>
          {isMobile ? (
            <TextComponent>
              {data?.[1]}
            </TextComponent>
          ) : (
            <P>
               {data?.[1]}
            </P>
          )}
        </h3>
      </div>
      <div className="box-mid1-content">
        <div>
          {isMobile ? (
            <TextComponent>
              {data?.[2]}
            </TextComponent>
          ) : (
            <P>
              {data?.[2]}
            </P>
          )}
          {isMobile ? (
            <TextComponent>
             {data?.[3]}
            </TextComponent>
          ) : (
            <P>
              {data?.[3]}
            </P>
          )}
        </div>
        <nav>
          <button
            onClick={() =>
              redirect(
                "https://drive.google.com/drive/folders/1fs_Eic94UUFKag61hyNspeaYnkd-mp6i?usp=drive_link",
              )
            }
          >
            <span>Ознакомиться со схемой</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
