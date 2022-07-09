import { useCallback, useEffect, useState } from "react";
import contentService from "services";
import { ProfileType } from "types/content";

function useProfile(): [ProfileType | undefined, string, () => void] {
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState<ProfileType | undefined>();

  const fetch = useCallback(async () => {
    const _profile = await contentService.profile(userId);
    setProfile(_profile);
  }, [userId]);

  useEffect(() => {
    if (userId) fetch();
  }, [userId, fetch]);

  useEffect(() => {
    const _userId = localStorage.getItem("userId") || "";
    setUserId(_userId);
  }, []);

  return [profile, userId, fetch];
}

export default useProfile;
