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
import React from "react";

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

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <Typography align="center" variant="h5" className="font-bold">
          Login
        </Typography>
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
        <Typography className="font-bold">Who are you</Typography>
        <Box py={1} />
        <div className="flex justify-evenly">
          <Chip label="idea" style={{ width: 96 }} />
          <Chip label="followers" style={{ width: 96 }} />
          <Chip label="creator" style={{ width: 96 }} />
        </div>
        <Box py={2} />
        <TextField label="name" fullWidth />
        <Box py={2} />
        <Button fullWidth>Login</Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
