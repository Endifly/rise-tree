import { BaseChildren } from "types/style";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

interface Props extends BaseChildren {}

const ThemeBaseline: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            color: "black",
            borderColor: "black",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeBaseline;
