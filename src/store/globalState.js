import { create } from "zustand";

export const functions = create((set, get) => ({
  redirect: (url) => {
    window.open(url, "_blank");
  },
}));
