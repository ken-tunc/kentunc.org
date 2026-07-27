import '@fontsource-variable/roboto';
import './styles/theme.css';
import './styles/global.css';
import './components/app-root.ts';
import { applyColorMode, readColorMode } from './lib/color-mode.ts';

// index.html applies the stored mode before first paint; this re-applies it so
// the `<meta name="theme-color">` stays in sync too.
applyColorMode(readColorMode());
