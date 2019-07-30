import { createMuiTheme } from "@material-ui/core/styles";
import { Colors } from "./components/Style-Colors";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${Colors.primary.blue}`
    },
    secondary: {
      main: `${Colors.primary.orangered}`
    },
    error: {
      main: `${Colors.secondary.yellow}`
    }
  }
});

export default theme;