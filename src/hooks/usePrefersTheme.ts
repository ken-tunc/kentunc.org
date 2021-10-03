import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import theme from '@/styles/theme';

const usePrefersTheme: () => Theme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return  React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          ...theme
        },
      }),
    [prefersDarkMode],
  );
}

export default usePrefersTheme;
