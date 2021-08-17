import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Table,
  TableCaption,
  Tr,
  Tbody,
  Td,
  Textarea,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

export default function DonateForm() {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} spacing={4}>
          <Heading fontSize={'4xl'} mb={8}>
            Donate Here ✌️
          </Heading>
          <Table variant="simple">
            <TableCaption>
              More information on why this bank account?
            </TableCaption>
            <Tbody>
              <Tr>
                <Td fontSize={'sm'} color={'gray.600'}>
                  Bank Name
                </Td>
                <Td textAlign={'right'}>ABC Bank</Td>
              </Tr>
              <Tr>
                <Td fontSize={'sm'} color={'gray.600'}>
                  Account Number
                </Td>
                <Td textAlign={'right'}>123123123</Td>
              </Tr>
              <Tr>
                <Td fontSize={'sm'} color={'gray.600'}>
                  Account Holder
                </Td>
                <Td textAlign={'right'}>CONG TY NOT CHARLES</Td>
              </Tr>
            </Tbody>
          </Table>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <Input
                type="text"
                placeholder="Your Name"
                variant="flushed"
                required
              />
            </FormControl>
            <FormControl id="amount">
              <Input
                type="number"
                placeholder="Amount Donated"
                variant="flushed"
                required
              />
            </FormControl>
            <FormControl id="tel">
              <Input
                type="tel"
                placeholder="Phone Number (optional)"
                variant="flushed"
              />
            </FormControl>

            <FormControl id="file">
              <Input variant="flushed" color="gray.400" type="file" />
            </FormControl>
            <Textarea
              id="note"
              placeholder="Note to recipient (Optional)"
              resize={'none'}
            ></Textarea>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Send me updates</Checkbox>
              </Stack>
              <Link
                as={RouteLink}
                to={'/congrats'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}
                >
                  Confirm Donation
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
