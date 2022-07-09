import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { BaseStyle } from "types/style";
import React from "react";
import useUser from "hooks/userUser";
import { addRoot } from "utils/string";

interface Props extends BaseStyle {
  userId?: string;
  followDateTime?: string;
}

const Participant: React.FC<Props> = ({
  className,
  style,
  userId,
  followDateTime,
}) => {
  const [user] = useUser(userId);

  return (
    <Card
      // sx={{ maxWidth: 345 }}
      className={`rounded-xl ${className}`}
      style={style}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {user?.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user?.username}
        subheader={followDateTime}
      />
      <CardMedia
        component="img"
        // height="194"
        style={{ height: "194px" }}
        image={addRoot(user?.avatar.url)}
        alt="Paella dish"
      />
      <CardContent>
        {user?.tags.map((tag) => (
          <Chip label={tag} key={tag} className="mr-2" />
        ))}
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

export default Participant;
