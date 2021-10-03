import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';

import Brand from '@/components/Brand';
import CareerHistory from '@/components/CareerHistory';
import Copyright from '@/components/Copyright';
import ExternalLinkList from '@/components/ExternalLinkList';
import Profile from '@/components/Profile';
import { careers } from '@/data/careers';
import { externalLinks } from '@/data/links';

const Index: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Brand />
        <SectionDivider />

        <SectionHeading text="Kensuke Taguchi" />
        <Profile />
        <SectionDivider />

        <SectionHeading text="Career" />
        <CareerHistory careers={careers} />
        <SectionDivider />

        <SectionHeading text="Links" />
        <ExternalLinkList links={externalLinks} />
        <SectionDivider />
      </Box>
      <Copyright />
    </Container>
  );
};

const SectionDivider: React.VFC = () => <Divider sx={{ my: 2 }} />;

const SectionHeading: React.VFC<{ text: string }> = (props) => {
  return (
    <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
      {props.text}
    </Typography>
  );
};

export default Index;
