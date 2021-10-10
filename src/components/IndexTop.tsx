import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ColorModeToggleButton from '@/components/ColorModeToggleButton';

const IndexTop: React.VFC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'end',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h4" component="h1">
        kentunc.org
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        toggle mode
        <ColorModeToggleButton />
      </Box>
    </Box>
  );
};

export default IndexTop;
