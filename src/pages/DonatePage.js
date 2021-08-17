import { Container, Box, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import DonateForm from '../components/DonateForm';

export default function DonatePage() {
  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.800')}>
        <Container maxW={'3xl'}>
          <DonateForm />
        </Container>
      </Box>
    </>
  );
}
