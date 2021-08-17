import React from 'react';

import {
  SimpleGrid,
  Container,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

import TestimonialCard from './TestimonialCard';
import TestimonialCard2 from './TestimonialCard2';

function TestimonialGrid() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} py={8}>
      <Container maxW={'6xl'}>
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={10}>
          <TestimonialCard idx={0} />
          <TestimonialCard idx={1} />
          <TestimonialCard idx={2} />
          <TestimonialCard idx={3} />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default TestimonialGrid;
