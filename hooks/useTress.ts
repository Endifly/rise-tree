import { useEffect, useState } from "react";
import contentService from "services";

const useTrees = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetch = async () => {
      const _data = await contentService.trees();
      setData(_data);
    };

    fetch();
  }, []);

  return data;
};

export default useTrees;
