import { Box, Button, Divider, Typography } from "@mui/material";
import LoginModal from "components/Modal/LoginModal";
import Participant from "components/Previewer/Participant";
import useEvent from "hooks/useEvent";
import useFollowings from "hooks/useFollowings";
import useProfile from "hooks/useProfile";
import ClientLayout from "layouts/clientLayout";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import contentService from "services";
import { addRoot } from "utils/string";

const EventInfoPage = () => {
  const router = useRouter();
  const [profile] = useProfile();
  const [openAuth, setOpenAuth] = useState(false);
  const { id: _id } = router.query;
  const id = typeof _id === "string" ? _id : "";
  const [event, fetch] = useEvent(id);
  const [joining, setJoining] = useState(false);
  const [followings, refetch] = useFollowings();

  console.log("followings", followings);

  const isJonined = useMemo(() => {
    let isFound = false;
    followings?.forEach((following) => {
      if (
        following.eventId === id &&
        following.userId === profile?.id.toString()
      ) {
        isFound = true;
        return;
      }
    });
    return isFound;
  }, [followings]);

  const onJoin = async () => {
    try {
      setJoining(true);
      if (!profile?.id) return setOpenAuth(true);
      await contentService.follow(id, profile.id.toString());
      refetch();
    } finally {
      setJoining(false);
    }
  };

  const onUnFollow = async () => {
    try {
      setJoining(true);
      // if (!profile?.id) return setOpenAuth(true);
      // const data = await contentService.follow(id, profile.id.toString());
      followings?.forEach(async (following) => {
        if (
          following.eventId === id &&
          following.userId === profile?.id.toString()
        ) {
          await contentService.unfollow(following.id.toString());
          refetch();
        }
      });
    } finally {
      setJoining(false);
    }
  };

  const JoiningButton = () => {
    if (isJonined) {
      return (
        <div className="flex justify-start" onClick={onUnFollow}>
          <Button variant="outlined">เข้าร่วมแล้ว</Button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-start" onClick={onJoin}>
          <Button variant="outlined">สนใจเข้าร่วม</Button>
        </div>
      );
    }
  };

  return (
    <ClientLayout>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <LoginModal open={openAuth} handleClose={() => setOpenAuth(false)} />
          <div
            style={{ maxHeight: 256 }}
            className="flex justify-center items-center"
          >
            <img
              src={addRoot(event?.banner?.url)}
              style={{ height: "100%" }}
              className="rounded-xl"
              alt="medusa"
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="h4" className="font-bold">
              {event?.title}
            </Typography>

            <Box pt={1} />

            <Typography variant="subtitle2">
              {event?.longDesc || event?.shortDesc}
            </Typography>

            <Box pt={2} />

            {JoiningButton()}
          </div>
        </div>
        <Box py={1} />
        <Divider />
        <Box py={2} />
        <div className="w-full grid grid-cols-5 gap-6">
          {followings?.map(
            (following) =>
              following.eventId === id && (
                <Participant
                  key={following.id}
                  userId={following.userId}
                  followDateTime={new Date(
                    following.created_at
                  ).toLocaleString()}
                />
              )
          )}
        </div>
        <Box py={8} />
      </div>
    </ClientLayout>
  );
};

export default EventInfoPage;
