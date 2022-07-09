import { useEffect, useState } from "react";
import contentService from "services";
import { BannerSizeType, BannerType } from "types/content";

interface EventType {
  created_at: string;
  endAt: string;
  id: number;
  longDesc: string;
  published_at: string;
  shortDesc: string;
  size: BannerSizeType;
  startAt: string;
  title: string;
  updated_at: string;
  banner: BannerType;
}

const useEvents = () => {
  const [data, setData] = useState<Array<EventType>>();

  useEffect(() => {
    const fetch = async () => {
      const _data = await contentService.events();
      setData(_data);
    };

    fetch();
  }, []);

  return data;
};

export default useEvents;
