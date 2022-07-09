import { contentInstance } from "./axios";

export const getTress = async () => {
  try {
    const res = await contentInstance.get("/rise-trees");
    return res.data;
  } catch {}
};

export const getEvent = async (id: string) => {
  try {
    const res = await contentInstance.get(`/rise-events/${id}`);
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

export const getTags = async () => {
  try {
    const res = await contentInstance.get("/rise-tags");
    return res.data;
  } catch {}
};

export const getProfile = async (id: string) => {
  try {
    const res = await contentInstance.get(`/profiles/${id}`);
    return res.data;
  } catch {}
};

export const getProfiles = async () => {
  try {
    const res = await contentInstance.get(`/profiles`);
    return res.data;
  } catch {}
};
