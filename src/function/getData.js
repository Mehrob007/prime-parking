import apiClient from "../utils/apiClient";

export const getData = async (keys) => {
  if (!Array.isArray(keys)) {
    return [];
  }

  let data = {};

  await Promise.all(
    keys.map(async (key, i) => {
      try {
        const res = await apiClient(`api/content?name=${key}`);
        data = { ...data, [i]: res.data.data.value };
      } catch (e) {
        console.error(`Error fetching data for key ${key}:`, e);
      }
    }),
  );

  return data;
};
