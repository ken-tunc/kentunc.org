import React from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Theme, useTheme } from '@mui/material';
import { SxProps } from '@mui/system';

import { ColorModeContext } from '@/components/ColorModeProvider';

const ColorModeToggleButton: React.VFC<{ sx?: SxProps<Theme> }> = () => {
  const { toggleColorMode } = React.useContext(ColorModeContext);

  const theme = useTheme();
  return (
    <IconButton onClick={toggleColorMode} color="inherit" size="small">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ColorModeToggleButton;
