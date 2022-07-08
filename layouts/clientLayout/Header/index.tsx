import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  );
};

export default Header;
