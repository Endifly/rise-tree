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

export const getFollowings = async () => {
  try {
    const res = await contentInstance.get(`/rise-followings`);
    return res.data;
  } catch {}
};

export const postFollow = async (eventId: string, userId: string) => {
  try {
    const res = await contentInstance.post(`/rise-followings`, {
      userId,
      eventId,
    });
    return res.data;
  } catch {}
};

export const postUnfollow = async (txId: string) => {
  try {
    const res = await contentInstance.delete(`/rise-followings/${txId}`);
    return res.data;
  } catch {}
};
