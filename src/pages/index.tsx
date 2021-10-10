import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NextPage } from 'next';

import CareerHistory from '@/components/CareerHistory';
import Copyright from '@/components/Copyright';
import DividedSection from '@/components/DividedSection';
import ExternalLinkList from '@/components/ExternalLinkList';
import IndexTop from '@/components/IndexTop';
import Profile from '@/components/Profile';
import { careers } from '@/data/careers';
import { externalLinks } from '@/data/links';

const Index: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <DividedSection>
          <IndexTop />
        </DividedSection>

        <DividedSection title="Profile">
          <Profile />
        </DividedSection>

        <DividedSection title="Career">
          <CareerHistory careers={careers} />
        </DividedSection>

        <DividedSection title="Links">
          <ExternalLinkList links={externalLinks} />
        </DividedSection>
      </Box>
      <Copyright />
    </Container>
  );
};

export default Index;
