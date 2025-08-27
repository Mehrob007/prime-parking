import React, { useEffect, useState } from "react";
import Box5 from "./elements/Box5";
// import { functions } from "../store/globalState";
// import useMediaQuery from "../function/useMediaQuery";
import { Helmet } from "react-helmet";
import { getData } from "../function/getData";
import apiClient from "../utils/apiClient";
import P from "./elements/com/P";
import { handleDownload } from "../utils/utlis";

const keys = [
  "offer_content_1",
  "offer_content_2",
  "offer_content_3",
  "offer_content_4",
];
export default function Offer() {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  // const { redirect } = functions();
  const [data, setData] = useState();
  const getItems = async () => {
    const res = await getData(keys);
    console.log("res", res);

    setData(res);
  };

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
    getItems();
  }, []);

  return (
    <>
      <div className="offer">
        {/* <Helmet>
          <title> Prime Parking - Оферта </title>
          <meta
            name="description"
            content="Explore our parking offers at Prime Parking. We offer a range of solutions to meet your parking needs."
          />
          <link rel="canonical" href="https://primeparking.ru/offer" />
        </Helmet> */}
        <P element={"h1"}>{data?.[0]}</P>
        <div className="offer-content">
          <div>
            <P element={"h1"}>{data?.[1]}</P>
            <div>
              <div>
                <button
                  onClick={async () => {
                    const res = await onChangeURL("offer_file_content_1");
                    if (res) {
                      // handleDownload(res);
                      document.location.href = res;
                    }
                  }}
                >
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a
                  target="_blank"
                  onClick={async () => {
                    // const res = await onChangeURL("offer_file_content_2");
                    // if (res) {
                    handleDownload("offer_file_content_2");
                    // document.location.href = res;
                    // }
                  }}
                >
                  Скачать
                </a>
              </p>
            </div>
          </div>
          <div>
            <P element={"h1"}>{data?.[2]}</P>
            <div>
              <div>
                <button
                  onClick={async () => {
                    const res = await onChangeURL("offer_file_content_3");
                    if (res) {
                      // handleDownload(res);
                      document.location.href = res;
                    }
                  }}
                >
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a
                  target="_blank"
                  onClick={async () => {
                    // const res = await onChangeURL("offer_file_content_4");
                    // if (res) {
                    handleDownload("offer_file_content_4");
                    // document.location.href = res;
                    // }
                  }}
                >
                  Скачать
                </a>
              </p>
            </div>
          </div>
          <div>
            <P element={"h1"}>{data?.[3]}</P>
            <div>
              <div>
                <button
                  onClick={async () => {
                    const res = await onChangeURL("offer_file_content_5");
                    if (res) {
                      // handleDownload(res);
                      document.location.href = res;
                    }
                  }}
                >
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a
                  target="_blank"
                  onClick={async () => {
                    // const res = await onChangeURL("offer_file_content_6");
                    // if (res) {
                    handleDownload("offer_file_content_6");
                    // document.location.href = res;
                    // }
                  }}
                >
                  Скачать
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer-com">
          <Box5 footerForm={2} />
        </footer>
      </div>
    </>
  );
}
