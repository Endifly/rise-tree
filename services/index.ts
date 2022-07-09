import { FollowingType, ProfileType } from "types/content";
import {
  getEvent,
  getEvents,
  getFollowings,
  getLogo,
  getProfile,
  getProfiles,
  getTags,
  getTress,
  postFollow,
  postUnfollow,
} from "./content";

class ContentService {
  async trees() {
    return await getTress();
  }
  async event(id: string) {
    return await getEvent(id);
  }
  async events() {
    return await getEvents();
  }
  async logo() {
    return await getLogo();
  }
  async tags() {
    return await getTags();
  }
  async profile(id: string) {
    return (await getProfile(id)) as ProfileType;
  }
  async profiles() {
    return (await getProfiles()) as Array<ProfileType>;
  }
  async follow(eventId: string, userId: string) {
    return await postFollow(eventId, userId);
  }
  async unfollow(txId: string) {
    return await postUnfollow(txId);
  }
  async followings() {
    return (await getFollowings()) as Array<FollowingType>;
  }
}

const contentService = new ContentService();

export default contentService;
