import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', 'sans- serif'",
  },
  colorPalette: {
    primary: {
      main: "#3C5186",
      dark: "#1e2842",
      light: "#91a2ce",
    },
    secondary: "#F6B8B8",
  },
  workspace: {
    appBarHeight: 60,
  },
});
