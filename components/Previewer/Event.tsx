import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { BaseStyle } from "types/style";
import React from "react";

interface Props extends BaseStyle {
  size: 1 | 2 | 3 | 4;
  avatar?: string;
  title?: string;
  date?: string;
  imgSrc?: string;
  shortDesc?: string;
}

const Event: React.FC<Props> = ({
  size,
  className,
  style,
  title,
  date,
  imgSrc,
  shortDesc,
}) => {
  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className={`rounded-xl ${className}`}
      style={style}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.freepik.com/free-photo/portrait-young-asia-lady-with-positive-expression-arms-crossed-smile-broadly-dressed-casual-clothing-looking-camera-pink-background_7861-3201.jpg?t=st=1657291876~exp=1657292476~hmac=9fe88bccc380e3afb1133d71c782b4205085752b740d734186e382523b472b91&w=1380"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
