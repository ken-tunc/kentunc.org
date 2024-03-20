import { Divider, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = {
  title?: string;
};

export const DividedSection: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  return (
    <section>
      {title && (
        <Typography variant="h5" component="h2" mb={1}>
          {title}
        </Typography>
      )}
      {children}
      <Divider sx={{ my: 2 }} />
    </section>
  );
};
