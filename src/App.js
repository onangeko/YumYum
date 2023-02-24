import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./components/Theme";
import Router from "./routes/index";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router/>
      </ThemeProvider>
  );
}
