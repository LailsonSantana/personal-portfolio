import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Delius } from "next/font/google";


export const delius = Delius({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
});

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
    fontFamily: `var(${delius.variable})`
  }
});

theme = responsiveFontSizes(theme)

export default theme