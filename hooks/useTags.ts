import { useCallback, useEffect, useState } from "react";
import contentService from "services";
import { BannerSizeType, BannerType } from "types/content";

interface DataType {
  created_at: string;
  id: number;
  published_at: string;
  tags: Array<string>;
  updated_at: string;
}

function useTags(): [DataType | undefined, () => void] {
  const [data, setData] = useState<DataType>();

  const fetch = useCallback(async () => {
    const _data: DataType = await contentService.tags();
    setData(_data);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [data, fetch];
}

export default useTags;
