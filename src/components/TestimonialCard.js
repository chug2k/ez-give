import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

import IMAGE1 from '../assets/1.jpeg';
import IMAGE2 from '../assets/2.jpeg';
import IMAGE3 from '../assets/3.jpeg';
import IMAGE4 from '../assets/4.jpeg';

const IMAGES = [IMAGE1, IMAGE2, IMAGE3, IMAGE4];

export default function TestimonialCard({ idx = 0 }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        py={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-6}
          pos={'relative'}
          height={'230px'}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            height={'100%'}
            width={'100%'}
            objectFit={'cover'}
            src={IMAGES[idx]}
          />
        </Box>
        <Stack pt={10} align={'center'} px={3}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            District {Math.ceil(Math.random() * 12)}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Recipient Name
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'xs'} color={'gray.600'}>
              Received {Math.ceil(Math.random() * 50)} kg of vegetables last
              Friday from the Preferred Shipper Hub {idx}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
