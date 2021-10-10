import React from 'react';

import { Theme, ThemeProvider, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';

type ColorMode = 'light' | 'dark';

type ColorModeContextValues = {
  toggleColorMode: () => void;
};

export const ColorModeContext = React.createContext<ColorModeContextValues>({
  toggleColorMode: () => {},
});

type ColorModeProviderProps = {
  initialMode: ColorMode | 'system';
  children: React.ReactNode;
};

const ColorModeProvider: React.FC<ColorModeProviderProps> = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<ColorMode>('light');

  const context: ColorModeContextValues = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  React.useEffect(() => {
    if (props.initialMode === 'system') {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode]);

  const theme: Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={context}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
