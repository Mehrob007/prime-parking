import axios from "axios";

export const handleDownload = async (urlGET) => {
  const response = await axios(urlGET);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "file";
  link.click();

  window.URL.revokeObjectURL(url);
};
