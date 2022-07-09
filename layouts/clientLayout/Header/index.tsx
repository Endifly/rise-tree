import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import LoginModal from "components/Modal/LoginModal";
import { useState } from "react";
import useProfile from "hooks/useProfile";
import { addRoot } from "utils/string";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const [profile] = useProfile();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <div
      style={{ height: 64 }}
      className="w-full flex items-center justify-between pt-8"
    >
      <LoginModal open={open} handleClose={handleClose} />
      <Typography variant="h4" className="font-bold">
        Medusa
      </Typography>
      <TextField
        variant="outlined"
        placeholder="search"
        size="small"
        className="w-4/12"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="flex items-center">
        <Button
          variant="text"
          style={{
            borderColor: "black",
            color: "black",
          }}
          href="/forum"
        >
          <ForumIcon fontSize="16px" />
          <Box px={1} />
          <Typography>forum</Typography>
        </Button>
        <Box px={1} />
        {profile?.id ? (
          <div
            style={{ height: 40, width: 40 }}
            className="rounded-full overflow-hidden"
          >
            <img
              src={addRoot(profile.avatar.url)}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ) : (
          <Button
            variant="outlined"
            style={{
              borderColor: "black",
              color: "black",
            }}
            onClick={() => setOpen(true)}
          >
            sign in
          </Button>
        )}
        {profile?.id && (
          <IconButton className="ml-4" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Header;
