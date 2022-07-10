import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { BaseStyle } from "types/style";
import React from "react";
import { useRouter } from "next/router";

interface Props extends BaseStyle {
  size?: 1 | 2 | 3 | 4;
  id?: number;
  avatar?: string;
  title?: string;
  date?: string;
  imgSrc?: string;
  shortDesc?: string;
}

const Event: React.FC<Props> = ({
  size = 1,
  className,
  id,
  style,
  title,
  date,
  imgSrc,
  shortDesc,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // col-span-1
  // col-span-2
  // col-span-3
  // col-span-4
  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className={`rounded-3xl ${className} hover:scale-105 col-span-${
        isMobile ? 1 : size
      }`}
      style={{ ...style, transition: "all 0.2s ease-in-out" }}
    >
      <CardMedia
        component="img"
        // height="194"
        className="cursor-pointer"
        image={imgSrc}
        alt="Paella dish"
        style={{ height: isMobile ? 128 : 256 }}
        onClick={() => router.push(`/event/${id}`)}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary" className="font-bold">
          {title}
        </Typography>
        <Box pt={1} />
        <Typography variant="body2" color="text.secondary">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Event;
