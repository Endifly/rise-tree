import { useEffect, useState } from "react";
import contentService from "services";
import { BannerType } from "types/content";

interface DataType {
  created_at: string;
  id: number;
  logo: BannerType;
  published_at: string;
  updated_at: string;
}

const useLogo = () => {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const _data: DataType = await contentService.logo();
        // setData(_data);
        setData(`https://content.tanakorn.space${_data?.logo.url}`);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return {
    logo: data,
    loading,
  };
};
export default useLogo;
