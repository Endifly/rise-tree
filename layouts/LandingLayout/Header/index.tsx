import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div
      style={{ height: 64 }}
      className="w-full flex items-center justify-between pt-8"
    >
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
        <Button
          variant="outlined"
          style={{
            borderColor: "black",
            color: "black",
          }}
        >
          sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;
