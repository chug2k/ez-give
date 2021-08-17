import { Container, Box, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import CongratsPanel from '../components/CongratsPanel';

export default function DonatePage() {
  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.800')}>
        <Container maxW={'3xl'}>
          <CongratsPanel />
        </Container>
      </Box>
    </>
  );
}
