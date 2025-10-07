import { useEffect } from "react";
import carBox1 from "../../assets/icon/car-box1.png";
import awDown from "../../assets/icon/aw-down.svg";
import AOS from "aos";
import { getData } from "../../function/getData";
import P from "./com/P";
import { useSore } from "../../store/globalState";

const keys = ["box1_content_1", "box1_content_2"];

export default function Box1() {
  const { dataMain, setData } = useSore();
  const data = dataMain?.box1;

  const getItems = async () => {
    const res = await getData(keys);

    setData({ box1: res });
  };

  useEffect(() => {
    if (!data) getItems();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="box1-main">
      {/* <BannerVideo />
      <div>
        <button onClick={toggleMute}>
          <img
            src={activeAudeoBunner ? audioTrue : audioFalse}
            alt="sound-toggle"
          />
        </button>
      </div> */}
      <div>
        <img data-aos={"zoom-in"} src={carBox1} alt=" " />
        <div>
          <h1>{data?.[0]}</h1>
          <P>{data?.[1]}</P>
          <img src={awDown} alt=" " />
        </div>
      </div>
    </div>
  );
}
