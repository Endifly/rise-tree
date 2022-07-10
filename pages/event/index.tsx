import type { NextPage } from "next";
import ClientLayout from "layouts/clientLayout";
import Previewer from "components/Previewer";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useTrees from "hooks/useTress";
import Slider from "components/Slider";
import useEvents from "hooks/useEvents";
import { BannerSizeType, BannerType } from "types/content";
import Event from "components/Previewer/Event";
import { addRoot } from "utils/string";
import CreateEventModal from "components/Modal/CreateEventModal";
import AddIcon from "@mui/icons-material/Add";

const EventPage: NextPage = () => {
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);
  const [events, refetch] = useEvents();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log(events?.[0].banner.url);
  // console.log(events);
  const handleCloseCreateEvent = () => {
    setOpenCreateEvent(false);
    refetch?.();
  };

  return (
    <ClientLayout>
      <CreateEventModal
        open={openCreateEvent}
        handleClose={handleCloseCreateEvent}
      />
      <div className="flex">
        <Typography variant="h5" className="font-bold">
          Event ที่กำลังเกิดขึ้น !
        </Typography>
        <div className="flex flex-1" />
        <Button onClick={() => setOpenCreateEvent(true)} variant="outlined">
          <AddIcon />
          {isMobile ? `` : `เพิ่ม Event ของคุณ`}
        </Button>
      </div>
      <Box py={1} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {events?.map((event) => (
          <Event
            className=""
            key={`1-${event.id}`}
            imgSrc={addRoot(event.banner?.url)}
            shortDesc={event?.shortDesc}
            size={event.size}
            id={event.id}
            title={event.title}
          />
        ))}
      </div>

      <Box py={4} />

      <Box py={4} />
    </ClientLayout>
  );
};

export default EventPage;
