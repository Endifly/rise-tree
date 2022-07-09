import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
import useLogo from "hooks/useLogo";
import useProfile from "hooks/useProfile";
import React, { useState } from "react";
import contentService from "services";
import CreateProfileModal from "../AddProfileModal";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginModal: React.FC<Props> = ({ open, handleClose }) => {
  const { loading, logo } = useLogo();
  const [username, setUsername] = useState("");
  const [openCreateProfile, setOpenCreateProfile] = useState(false);

  const checkMember = async () => {
    const profiles = await contentService.profiles();
    // console.log(data);
    // setOpenCreateProfile(true);
    var isFound = false;
    profiles.forEach((profile) => {
      if (profile.username === username) {
        localStorage.setItem("userId", profile.id.toString());
        isFound = true;
      }
    });

    return isFound;
  };

  const onSubmit = async () => {
    const isMember = await checkMember();
    if (!isMember) return setOpenCreateProfile(true);
    else {
      handleClose();
      window.location.reload();
    }
  };

  const handleCloseCreateProfile = async () => {
    const isMember = await checkMember();
    setOpenCreateProfile(false);
    handleClose();
    if (isMember) window.location.reload();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <CreateProfileModal
          open={openCreateProfile}
          handleClose={handleCloseCreateProfile}
          username={username}
        />
        <Box py={2} />
        <div className="flex justify-center">
          <img src={logo} style={{ width: 128, height: 128, marginLeft: 32 }} />
        </div>
        {/* <a
          href="https://www.flaticon.com/free-icons/medusa"
          title="medusa icons"
        >
          Medusa icons created by Freepik - Flaticon
        </a> */}
        <Box py={2} />
        {/* <Typography className="font-bold">Who are you</Typography>
        <Box py={1} /> */}
        {/* <div className="flex justify-evenly">
          <Chip label="idea" style={{ width: 96 }} />
          <Chip label="followers" style={{ width: 96 }} />
          <Chip label="creator" style={{ width: 96 }} />
        </div>
        <Box py={2} /> */}
        <Typography align="center" className="font-bold">
          Form your team now !
        </Typography>
        <Box py={2} />
        <TextField
          placeholder="name"
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
        />
        <Box py={2} />
        <Button
          fullWidth
          style={{ color: "black", borderColor: "black" }}
          variant="outlined"
          onClick={onSubmit}
        >
          Login
        </Button>
        <Box py={2} />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
