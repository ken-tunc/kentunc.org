import { IconButton, useColorScheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";

export const ModeToggleButton: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      color="inherit"
      size="small"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
