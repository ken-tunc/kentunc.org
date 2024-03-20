import { Link, Typography } from "@mui/material";

export const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://kentunc.org">
        kentunc.org
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};
