import { useCallback, useEffect, useState } from "react";
import contentService from "services";
import { BannerSizeType, BannerType, FollowingType } from "types/content";

function useFollowings(): [Array<FollowingType> | undefined, () => void] {
  const [data, setData] = useState<Array<FollowingType>>();

  const fetch = useCallback(async () => {
    const _data: Array<FollowingType> = await contentService.followings();
    console.log(data);
    setData(_data);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [data, fetch];
}

export default useFollowings;
