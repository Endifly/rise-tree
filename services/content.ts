import { contentInstance } from "./axios";

export const getTress = async () => {
  try {
    const res = await contentInstance.get("/rise-trees");
    return res.data;
  } catch {}
};

export const getEvents = async () => {
  try {
    const res = await contentInstance.get("/rise-events");
    return res.data;
  } catch {}
};

export const getLogo = async () => {
  try {
    const res = await contentInstance.get("/rise-logo");
    return res.data;
  } catch {}
};
