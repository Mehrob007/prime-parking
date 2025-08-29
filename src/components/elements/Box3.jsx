import React, { useEffect, useState } from "react";
import AOS from "aos";
import bgBox3Car from "../../assets/icon/bg-box3-car.png";
// import logoIconBox3 from "../../assets/icon/logo-icon-box3.svg";
import iconLineBox3 from "../../assets/icon/icon-line-box3.svg";
import useMediaQuery from "../../function/useMediaQuery";
import { getData } from "../../function/getData";
import P from "./com/P";
import TextComponent from "./com/TextComponent";
const keys = [
  "box3_content_1",
  "box3_content_2",
  "box3_content_3",
  "box3_content_4",
  "box3_content_5",
  "box3_content_6",
  "box3_content_7",
];
export default function Box3() {
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
    <div className="box3-main">
      <h1 data-aos={"fade-down"} data-aos-duration={"700"}>
        {/* Концепция {isMobile && <br />} паркинга */}
        {data?.[0]}
      </h1>
      <div>
        <div className="bg-box3-1">
          <div>
            {/* <img src={logoIconBox3} alt="logoIconBox3" /> */}
            {!isMobile ? (
              <div>
                <div>
                  <P element={"h1"}>{data?.[1]}</P>
                  <P>{data?.[2].split("~").join(" ")}</P>
                </div>
                <img src={iconLineBox3} alt=" " />
                <div>
                  <P element="h1">{data?.[3]}</P>
                  <P>{data?.[4].split("~").join(" ")}</P>
                </div>
                <img src={iconLineBox3} alt=" " />
                <div>
                  <P element={"h1"}>{data?.[5]}</P>
                  <P>{data?.[6].split("~").join(" ")}</P>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <P element={"h1"}>{data?.[1]}</P>
                  {data?.[2]
                    ?.split("~")
                    ?.slice(1)
                    ?.map((e, i) => (
                      <>
                        <TextComponent key={i}>{e}</TextComponent>
                      </>
                    ))}
                </div>
                <img src={iconLineBox3} alt=" " />
                <div>
                  <P element="h1">{data?.[3]}</P>
                  {data?.[4]
                    ?.split("~")
                    ?.slice(1)
                    ?.map((e, i) => (
                      <>
                        <TextComponent key={i}>{e}</TextComponent>
                      </>
                    ))}
                </div>
                <img src={iconLineBox3} alt=" " />
                <div>
                  <P element={"h1"}>{data?.[5]}</P>
                  {data?.[6]
                    ?.split("~")
                    ?.slice(1)
                    ?.map((e, i) => (
                      <>
                        <TextComponent key={i}>{e}</TextComponent>
                      </>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-box3-2">
          <img
            data-aos={"fade-up"}
            data-aos-duration="1700"
            src={bgBox3Car}
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}
