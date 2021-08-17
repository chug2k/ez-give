import { Flex, Box, Image, useColorModeValue } from '@chakra-ui/react';

import IMAGE1 from '../assets/1.jpeg';
import IMAGE2 from '../assets/2.jpeg';
import IMAGE3 from '../assets/3.jpeg';
import IMAGE4 from '../assets/4.jpeg';

const IMAGES = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];

function TestimonialCard2({ idx = 0 }) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          height={64}
          src={IMAGES[idx]}
          roundedTop="lg"
          w={'100%'}
          objectFit="cover"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              District 2
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {Date.now()}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default TestimonialCard2;
