import Navbar from '../components/Navbar';
import {
    Text,
    Textarea,
    Box,
    Card,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Slide,
    Button,
    Link,
    ButtonGroup,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon,
    CloseButton,
    useDisclosure,
    useToast,
    Flex,
    Image,
    useColorModeValue,
    CardBody,
    CardFooter,
    Heading,
    Center,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
} from "@chakra-ui/react";
import voucherIcon from "../assets/vectors/voucher.svg"
import React, { useRef } from 'react';
import { Link as RouterLink} from 'react-router-dom';

function MyVoucher() {
    const data = [
        { id: 1, title: 'Voucher 10%'},
        { id: 2, title: 'Voucher 20%'},
        { id: 3, title: 'Voucher 35%'},
        { id: 4, title: 'Voucher 50%'},
      ];
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null)

    return (
    <>
      <Flex align="center" justify="center" minH="100vh" direction="row">
        <Navbar />
        <Stack direction="column" spacing="4">
            {data.map((item) => (
                <Card key={item.id} w={[350, 450, 550]}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                borderRadius="50"
                borderColor="black"
                borderWidth="3px"
                padding="10px" 
                alignItems="center"
                >
                    <Image
                        src={voucherIcon}
                        w="50px"
                        fallbackSrc='https://via.placeholder.com/100'
                    />
                    <CardBody>
                        <Heading size='md'>{item.title}</Heading>
                    </CardBody>
                    <Button
                        type="submit"
                        id="submit-login"
                        bgColor="#FFF177"
                        borderColor="#1C1C1C"
                        borderWidth="3px"
                        color="#1C1C1C"
                        fontWeight="bold"
                        fontSize="md"
                        w="75px"
                        h="30px"
                        borderRadius="20"
                        onClick={onOpen}
                        >
                        Use
                    </Button>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Use Voucher
                            </AlertDialogHeader>

                            <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Link as={RouterLink} to="/my-voucher" display="flex" alignItems="center">
                                <Button colorScheme='red' onClick={onClose} ml={3}>
                                Use
                                </Button>
                            </Link>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Card>
            ))}
        </Stack>
        <Box
        pos="fixed"
        top="10px"
        right="10px"
        w="150px"
        h="50px"
        bgColor="#1C1C1C"
        borderColor="#FFF177"
        borderWidth="3px"
        color="#FFF177"
        fontWeight="bold"
        fontSize="md"
        borderRadius="20"
        justifyContent="center"
        alignItems="center"
        display="flex"
        >
            500 points
        </Box>
      </Flex>
    </>
    );
}

export default MyVoucher;