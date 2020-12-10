import { createMuiTheme } from '@material-ui/core/styles';

const lightgreen = "#5CDB95";
const darkBlue = "#05386B";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: darkBlue,
      green: lightgreen
    },
    primary: {
      main: lightgreen
    },
    secondary: {
      main: darkBlue
    }
  },
  typography: {
    tab: {
      fontSize: "1rem",
      fontWeight: 700,
      color: darkBlue,
      textTransform: "none",
    }
  }
});

export default theme;
