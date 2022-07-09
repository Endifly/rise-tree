import { ProfileType } from "types/content";
import {
  getEvent,
  getEvents,
  getLogo,
  getProfile,
  getProfiles,
  getTags,
  getTress,
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
}

const contentService = new ContentService();

export default contentService;
