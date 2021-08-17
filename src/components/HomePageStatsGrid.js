import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export default function HomePageStatsGrid() {
  return (
    <Box>
      <Container zIndex={10} position={'relative'}>
        <Stack
          flex={1}
          justify={{ lg: 'center' }}
          py={{ base: 4, md: 20, xl: 32 }}
        >
          <Box mb={{ base: 8, md: 20 }}>
            <Text
              fontFamily={'heading'}
              fontWeight={700}
              textTransform={'uppercase'}
              mb={3}
              fontSize={'xl'}
              color={'gray.500'}
            >
              100% of your donation goes to the needy
            </Text>
            <Heading mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              Trusted Local Hubs
            </Heading>
            <Text fontSize={'xl'} color={'gray.400'}>
              We work with{' '}
              <Text as={'span'} color={'green.400'}>
                14 trusted local hubs{' '}
              </Text>{' '}
              to make sure your donation goes to the right place. You're also
              given an order number that shows where your meals were sent.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {stats.map(stat => (
              <Box key={stat.title}>
                <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                  {stat.title}
                </Text>
                <Text fontSize={'xl'} color={'gray.400'}>
                  {stat.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
        <Flex flex={1} />
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'green.400'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '1523',
    content: (
      <>
        <StatsText>Meals Provided</StatsText> since August 18th, 2021
      </>
    ),
  },
  {
    title: '123,000,000 VND',
    content: (
      <>
        <StatsText>Paid to Local Farmers</StatsText> for produce
      </>
    ),
  },
  {
    title: '86,000,000 VND',
    content: (
      <>
        <StatsText>Paid to Drivers and Trucks</StatsText> to carry supplies
      </>
    ),
  },
  {
    title: '0 VND',
    content: (
      <>
        <StatsText>Paid to Administrators</StatsText> to build and maintain
        website
      </>
    ),
  },
];
