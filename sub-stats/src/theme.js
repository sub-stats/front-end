import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "./components/Style-Colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${Colors.primary.blue}`,
      contrastText: `${Colors.neutral.white}`
    },
    secondary: {
      main: `${Colors.primary.orangered}`,
      contrastText: `${Colors.neutral.white}`
    },
    error: {
      main: `${Colors.secondary.yellow}`
    }
  },
  typography: {
    fontFamily: [
      'verdana', 'arial', 'helvetica', 'sans-serif'
    ].join(','),
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: `${Colors.neutral.redditgrey}`,
      contrastText: `${Colors.neutral.white}`
    },
    secondary: {
      main: `${Colors.primary.orangered}`,
      contrastText: `${Colors.neutral.white}`
    },
    error: {
      main: `${Colors.secondary.yellow}`
    }
  },
  typography: {
    fontFamily: [
      'verdana', 'arial', 'helvetica', 'sans-serif'
    ].join(','),
  },
});