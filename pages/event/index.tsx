import type { NextPage } from "next";
import ClientLayout from "layouts/clientLayout";
import Previewer from "components/Previewer";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import useTrees from "hooks/useTress";
import Slider from "components/Slider";
import useEvents from "hooks/useEvents";
import { BannerSizeType, BannerType } from "types/content";

const EventPage: NextPage = () => {
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);
  const events = useEvents();

  // console.log(events?.[0].banner.url);
  console.log(events);

  return (
    <ClientLayout>
      <Typography variant="h6" className="font-bold">
        Rise
      </Typography>
      <Box py={1} />
      <div className="flex">
        {ids.map((id) => (
          <Previewer className="mx-2" key={`1-${id}`} />
        ))}
      </div>

      <Box py={4} />

      <Typography variant="h6" className="font-bold">
        DevMountian
      </Typography>
      <Box py={1} />
      <div className="flex">
        <Slider style={{ width: 800, overflowX: "scroll" }}>
          {ids.map((id) => (
            <Previewer
              className="mx-2"
              key={`2-${id}`}
              style={{ width: 1000 }}
            />
          ))}
        </Slider>
      </div>

      <Box py={4} />
    </ClientLayout>
  );
};

export default EventPage;
