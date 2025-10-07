import { create } from "zustand";

export const functions = create((set) => ({
  redirect: (url) => {
    window.open(url, "_blank");
  },
  modalOpen: false,
  setModalOpen: (state) => set({ modalOpen: !state }),
}));

export const useSore = create((set) => ({
  dataMain: { def: "" },
  setData: (state) => {
    console.log("setData input:", state);
    set((prev) => ({
      dataMain: {...prev.dataMain, ...state},
    }));
  },
}));
