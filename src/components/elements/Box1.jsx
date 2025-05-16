import { useEffect } from "react";
import carBox1 from "../../assets/icon/car-box1.png";
import awDown from "../../assets/icon/aw-down.svg";
import AOS from "aos";

export default function Box1() {
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
        <img data-aos={"zoom-in"} src={ carBox1} alt="carBox1" />
        <div>
          <h1>Парковочное пространство</h1>
          <p>Информация о парковке жилого квартала Prime Park</p>
          <img src={awDown} alt="awDown" />
        </div>
      </div>
    </div>
  );
}
