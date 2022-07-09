import { getEvents, getLogo, getTress } from "./content";

class ContentService {
  async trees() {
    return await getTress();
  }
  async events() {
    return await getEvents();
  }
  async logo() {
    return await getLogo();
  }
}

const contentService = new ContentService();

export default contentService;
