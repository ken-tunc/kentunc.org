import React from 'react';
import Typography from '@mui/material/Typography';

const Brand: React.VFC = () => {
  return (
    <>
      <Typography variant="h3" component="h1">
        kentunc.org
      </Typography>
      <Typography variant="subtitle1" component="h6" color="text.secondary">
        A software engineer.
      </Typography>
    </>
  )
}

export default Brand
