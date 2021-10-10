import React from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Profile: React.VFC = () => {
  return (
    <Box>
      <Typography variant="body1" component="h3">
        Kensuke Taguchi
      </Typography>
      <Typography variant="body2" component="h4" color="text.secondary">
        A software engineer.
        <br />
        Like: music, cooking, investment, etc.
      </Typography>
    </Box>
  );
};

export default Profile;
