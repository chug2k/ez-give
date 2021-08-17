import { Box, Container, Stack } from '@chakra-ui/react';

import React from 'react';
import HomePageHero from '../components/HomePageHero';
import HomePageStatsGrid from '../components/HomePageStatsGrid';
import TestimonialGrid from '../components/TestimonialGrid';
import HowItWorks from '../components/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack as={Box} spacing={{ base: 4, md: 7 }} py={{ base: 10, md: 18 }}>
          <HomePageHero />
        </Stack>
      </Container>
      <TestimonialGrid />
      <HomePageStatsGrid />
      <HowItWorks />
    </>
  );
}
