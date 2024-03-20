import { Box, Typography } from "@mui/material";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <Box>
      <Typography variant="body1" component="h3">
        Kensuke Taguchi
      </Typography>
      <Typography variant="body2" component="h4" color="text.secondary">
        A software engineer
        <br />
        Interest: music, cooking, investment, etc.
      </Typography>
    </Box>
  );
};
