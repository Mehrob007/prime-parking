
export const handleDownload = async (key) => {
  try {
    const link = document.createElement("a");
    link.href = `${import.meta.env.VITE_PUBLIC_API_URL_FILE_DOW}?key=${key}`;
    link.download;
    link.click();
  } catch (error) {
    console.error("Ошибка при скачивании файла:", error);
  }
};
