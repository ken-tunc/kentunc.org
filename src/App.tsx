import {
  Box,
  Container,
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material";
import { AppHeader } from "./components/AppHeader";
import { Careers } from "./components/Careers";
import { Copyright } from "./components/Copyright";
import { DividedSection } from "./components/DividedSection";
import { ExternalLinks } from "./components/ExternalLinks";
import { Profile } from "./components/Profile";

function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <DividedSection>
            <AppHeader />
          </DividedSection>

          <DividedSection title="Profile">
            <Profile />
          </DividedSection>

          <DividedSection title="Career">
            <Careers />
          </DividedSection>

          <DividedSection title="Links">
            <ExternalLinks />
          </DividedSection>
        </Box>
        <Copyright />
      </Container>
    </CssVarsProvider>
  );
}

export default App;
