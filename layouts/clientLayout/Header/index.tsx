import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import LoginModal from "components/Modal/LoginModal";
import React, { useState } from "react";
import useProfile from "hooks/useProfile";
import { addRoot } from "utils/string";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Header = () => {
  const router = useRouter();
  const [profile] = useProfile();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    localStorage.removeItem("userId");
    window.location.reload();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onOpenDetail = (id: string) => {
    router.push(`/info/${id}`);
  };

  return (
    <div
      style={{ height: 64 }}
      className="w-full flex items-center justify-between pt-8"
    >
      <LoginModal open={open} handleClose={handleClose} />
      <Typography
        variant="h4"
        className="font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
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
        {profile?.id && (
          <IconButton onClick={handleClick}>
            <CalendarMonthIcon />
          </IconButton>
        )}
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="bottom-end"
        >
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            <img
              style={{
                maxWidth: 512,
              }}
              src={
                "https://content.tanakorn.space/uploads/calendar_d3db6d95e0.png?1285563.600000143"
              }
            />
          </Box>
        </Popper>
        <Box px={1} />
        {profile?.id ? (
          <div
            style={{ height: 40, width: 40 }}
            className="rounded-full overflow-hidden cursor-pointer"
            onClick={() => onOpenDetail(profile.id.toString())}
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
