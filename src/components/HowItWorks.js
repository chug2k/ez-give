import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
// import {
//   IoAnalyticsSharp,
//   IoLogoBitcoin,
//   IoSearchSharp,
// } from 'react-icons/io5';

const Feature = ({ text, number, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        <Text as={'span'} w={8}>
          {number}
        </Text>
      </Flex>
      <Text color={'gray.500'} textAlign={'left'} fontSize={'md'}>
        {text}
      </Text>
    </Stack>
  );
};

export default function HowItWorks() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} py={8}>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>Three Steps</Heading>
            <Text fontSize={'lg'}>
              Make a simple bank transfer to An's Agriculture Cooperative.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Feature
                number={1}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Click above to select your amount.'}
              />
              <Feature
                number={2}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={
                  'Upload a screenshot of your transfer for easy confirmation.'
                }
              />
              <Feature
                number={3}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={
                  'Leave your phone number if you would like to receive updates via Zalo or Facebook'
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
