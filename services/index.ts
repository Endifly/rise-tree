import { getTress } from "./content";

class ContentService {
  async trees() {
    return await getTress();
  }
}

const contentService = new ContentService();

export default contentService;
