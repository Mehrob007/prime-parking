import { useEffect, useRef, useState } from "react";
import playIcon from "../../../assets/icon/play.svg";
import pauseIcon from "../../../assets/icon/pause.svg";
import audioOn from "../../../assets/icon/1.svg";
import audioOff from "../../../assets/icon/2.svg";
import bannerPlaceholder from "../../../assets/img/banner-placeholder.png";
import axios from "axios";

const VIDEO_URL = "file_video_content_1";

const BannerVideo = () => {
  const videoRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(null); // objectURL
  const [shouldLoadVideo, setShouldLoad] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [iconsFade, setIconsFade] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShouldLoad(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    (async () => {
      try {
        const res1 = await axios(
          `${import.meta.env.VITE_PUBLIC_API_URL}api/files?key=${VIDEO_URL}`
        );
        const res = await axios(
          `${import.meta.env.VITE_PUBLIC_API_URL_FILE}${
            res1.data.data?.fileName
          }`
        );
        console.log("res", res);

        // const blob = await res?.data?.blob();
        // const url = URL.createObjectURL(blob);
        // console.log("url", url);
        setVideoSrc(
          `${import.meta.env.VITE_PUBLIC_API_URL_FILE}${
            res1.data.data?.fileName
          }`
        );
      } catch (err) {
        console.error("Не удалось загрузить видео:", err);
      }
    })();
  }, [shouldLoadVideo]);

  const togglePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;

    if (isPaused) {
      v.muted = true;
      v.play();
    } else {
      v.pause();
    }
    setIsPaused(!isPaused);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setSoundOn(!v.muted);
  };

  useEffect(() => {
    if (isPaused) setIconsFade(false);
    else setTimeout(() => setIconsFade(true), 1500);
  }, [isPaused]);

  // const handleDownload = async () => {
  //   try {
  //     // если objectURL уже есть — используем его
  //     let blobUrl = videoSrc;
  //     if (!blobUrl) {
  //       const res = await fetch(VIDEO_URL);
  //       const blob = await res.blob();
  //       blobUrl = URL.createObjectURL(blob);
  //     }
  //     const a = document.createElement("a");
  //     a.href = blobUrl;
  //     a.download = "banner.mp4";
  //     a.click();
  //     URL.revokeObjectURL(blobUrl);
  //   } catch (err) {
  //     console.error("Ошибка скачивания:", err);
  //   }
  // };

  console.log("videoSrc", videoSrc);

  return (
    <div className="banner-video">
      {videoSrc ? (
        <div onClick={togglePlayPause}>
          {
            <video
              ref={videoRef}
              src={videoSrc}
              loop
              playsInline
              muted
              width="100%"
              style={{ objectFit: "cover" }}
            />
          }

          {/* play / pause icon */}
          <div>
            <img
              className={iconsFade ? "transparent-icon" : ""}
              src={isPaused ? playIcon : pauseIcon}
              alt=""
            />
          </div>
        </div>
      ) : (
        <img
          src={bannerPlaceholder}
          className="bannerPlaceholder"
          alt="bannerPlaceholder"
        />
      )}

      {/* mute / unmute */}
      <nav className={isPaused ? "off-media" : ""}>
        <button onClick={() => !isPaused && toggleMute()}>
          <img src={soundOn ? audioOn : audioOff} alt="" />
        </button>
      </nav>
    </div>
  );
};

export default BannerVideo;
