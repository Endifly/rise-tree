import { useCallback, useEffect, useState } from "react";
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

function useEvents(): [Array<EventType> | undefined, () => void] {
  const [data, setData] = useState<Array<EventType>>();

  const fetch = useCallback(async () => {
    const _data: Array<EventType> = await contentService.events();
    _data.sort((a, b) => {
      const dA = new Date(a.created_at);
      const dB = new Date(b.created_at);

      // return dA.getTime() > dB.getTime();
      if (dA.getTime() > dB.getTime()) return 1;
      if (dA.getTime() < dB.getTime()) return -1;
      return 0;
    });
    setData(_data);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [data, fetch];
}

export default useEvents;
