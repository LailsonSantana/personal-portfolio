import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#012030",
    },
    secondary: {
      main: "#13678A",
    },
  },
  typography: {
    fontFamily: "Segoe UI"   //"Segoe UI"
  }
});

theme = responsiveFontSizes(theme)

export default theme