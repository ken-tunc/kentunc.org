import React from 'react';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type DividedSectionProps = {
  title?: string;
  children: React.ReactNode;
};

const DividedSection: React.FC<DividedSectionProps> = (props) => {
  return (
    <section>
      {props.title ? (
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          {props.title}
        </Typography>
      ) : null}
      {props.children}
      <Divider sx={{ my: 2 }} />
    </section>
  );
};

export default DividedSection;
