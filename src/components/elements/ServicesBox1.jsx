import React, { useEffect, useState } from "react";
import imgServices1 from "../../assets/img/imgServices1.svg";
import iconPDF from "../../assets/icon/iconPDF.svg";
import apiClient from "../../utils/apiClient";
import { getData } from "../../function/getData";
import P from "./com/P";

const keys = ["service_content_1", "service_content_2", "service_content_3"];
export default function ServicesBox1() {
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
    <div className="services-box1">
      <P element={"h3"}>{data?.[0]}</P>
      <h1 className="services-title">{data?.[1]}</h1>
      <div className="services-sub-text">
        <P>{data?.[2]}</P>
      </div>
      <img src={imgServices1} alt=" " />
      <nav>
        <a
          target="_blank"
          // href="https://drive.google.com/drive/folders/1iYoBDTNTgsjke5-gNKozrOgLufNbQM6y?usp=drive_link"
          onClick={async () => {
            const res = await onChangeURL("service_file_content_1");
            if (res) {
              document.location.href = res;
            }
          }}
        >
          <img src={iconPDF} alt=" " />
          Прайс-лист на услуги мойки
        </a>
      </nav>
    </div>
  );
}
