import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "./components/Style-Colors";

const theme = createMuiTheme({
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
  }
});

export default theme;