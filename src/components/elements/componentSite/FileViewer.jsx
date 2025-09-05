// FileViewer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../utils/apiClient";

const FILE_ENDPOINT = "api/files";

export default function FileViewer() {
  const { key } = useParams();
  const [fileUrl, setFileUrl] = useState(null);
  const [mime, setMime] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!key) return;

    let objectUrl;
    (async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await apiClient(`${FILE_ENDPOINT}?key=${key}`);
        const resFile = await apiClient(
          `${import.meta.env.VITE_PUBLIC_API_URL_FILE}${
            res.data.data?.fileName
          }`
        );

        if (!resFile.ok) throw new Error(`HTTP ${resFile.status}`);

        setMime(resFile.headers.get("Content-Type") || "");
        const blob = await resFile.blob();

        objectUrl = URL.createObjectURL(blob);
        setFileUrl(objectUrl);
      } catch (err) {
        setError(err.message || " ");
      } finally {
        setLoading(false);
      }
    })();

    return () => objectUrl && URL.revokeObjectURL(objectUrl);
  }, [key]);

  if (loading) return <p>Загрузка…</p>;
  if (error) return <p style={{ color: "red" }}>
    {/*  */}
    </p>;
  if (!fileUrl) return null;

  if (mime.startsWith("image/"))
    return <img src={fileUrl} alt="" style={{ maxWidth: "100%" }} />;

  if (mime.startsWith("video/"))
    return <video src={fileUrl} controls style={{ width: "100%" }} />;

  if (mime.startsWith("audio/")) return <audio src={fileUrl} controls />;

  if (mime === "application/pdf")
    return (
      <iframe
        src={fileUrl}
        title="PDF"
        style={{ width: "100%", height: "80vh", border: "none" }}
      />
    );

  return (
    <p>
      <a href={fileUrl} download>
        Скачать файл
      </a>
      &nbsp;(<em>{mime || "неизвестный тип"}</em>)
    </p>
  );
}
