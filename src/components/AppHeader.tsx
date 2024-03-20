import { Box, Typography } from "@mui/material";
import React from "react";
import { ModeToggleButton } from "./ModeToggleButton";

export const AppHeader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" component="h1">
        kentunc.org
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <ModeToggleButton />
      </Box>
    </Box>
  );
};
