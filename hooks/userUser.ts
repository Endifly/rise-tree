import { useCallback, useEffect, useState } from "react";
import contentService from "services";
import { ProfileType } from "types/content";

function useUser(
  userId: string | undefined
): [ProfileType | undefined, () => void] {
  const [profile, setProfile] = useState<ProfileType | undefined>();

  const fetch = useCallback(async () => {
    if (!userId) return;
    const _profile = await contentService.profile(userId);
    setProfile(_profile);
  }, [userId]);

  useEffect(() => {
    if (userId) fetch();
  }, [userId, fetch]);

  return [profile, fetch];
}

export default useUser;
