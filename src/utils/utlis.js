import apiClient from "./apiClient";

export const handleDownload = async (key, res) => {
  try {
    console.log("urlGET", key);

    const response = await apiClient.get(res);

    const blob = response.data; // axios
    // const blob = await response.blob(); // если apiClient это fetch

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = key || "file"; // имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Ошибка при скачивании файла:", err);
  }
};
