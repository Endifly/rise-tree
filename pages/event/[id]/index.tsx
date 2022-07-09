import { Box, Button, Typography } from "@mui/material";
import useEvent from "hooks/useEvent";
import ClientLayout from "layouts/clientLayout";
import { useRouter } from "next/router";
import { addRoot } from "utils/string";

const EventInfoPage = () => {
  const router = useRouter();
  const { id: _id } = router.query;
  const id = typeof _id === "string" ? _id : "";
  const [event] = useEvent(id);

  console.log(event?.id);

  return (
    <ClientLayout>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <div
          style={{ maxHeight: 256 }}
          className="flex justify-center items-center"
        >
          <img
            src={addRoot(event?.banner?.url)}
            style={{ height: "100%" }}
            className="rounded-xl"
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

          <div className="flex justify-start">
            <Button variant="outlined">สนใจเข้าร่วม</Button>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default EventInfoPage;
