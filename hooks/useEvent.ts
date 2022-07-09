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

function useEvent(id: string): [EventType | undefined, () => void] {
  const [data, setData] = useState<EventType>();

  const fetch = useCallback(async () => {
    console.log(id);
    const _data: EventType = await contentService.event(id);
    setData(_data);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [data, fetch];
}

export default useEvent;
