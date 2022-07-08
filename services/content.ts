import { contentInstance } from "./axios";

export const getTress = async () => {
  try {
    const res = await contentInstance.get("/rise-trees");
    return res.data;
  } catch {}
};
