import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      logoShadow: "#2c1635",
      light: "#ce98e4",
      // main: "#824999",
      main: "#9252ac",
      grey: "#a2a2a2",
      darkGrey: "#444444",
      // dark: "#6b3880",
      dark: "#824999",
      text: "#f5f5f5",
      white: "#ffffff",
      black: "#2e2e2e",
    },
    secondary: {
      bright: "#2fa78b",
      main: "#29967b",
      dark: "#22856c",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["DM Sans, sans-serif"],
  },
});
