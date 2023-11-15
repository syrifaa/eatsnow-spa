import Navbar from '../components/Navbar';

import {
    Text,
    Box,
    Card,
    Stack,
    Button,
    Link,
    useDisclosure,
    Flex,
    Image,
    CardBody,
    Heading,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/react";
import voucherIcon from "../assets/vectors/voucher.svg"
import { useRef } from 'react';
import { Link as RouterLink} from 'react-router-dom';

function RedeemVoucher() {
    const data = [
        { id: 1, title: 'Voucher 10%', desc: 20},
        { id: 2, title: 'Voucher 20%', desc: 50},
        { id: 3, title: 'Voucher 35%', desc: 100},
        { id: 4, title: 'Voucher 50%', desc: 200},
      ];
    const voucher = 150;
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
                        fallbackSrc='https://via.placeholder.com/100'
                    />
                    <CardBody>
                        <Heading size='md'>{item.title}</Heading>
    
                        <Text py='2'>
                        Redeem with {item.desc} points
                        </Text>
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
                    w="100px"
                    h="50px"
                    borderRadius="20"
                    onClick={onOpen}
                    isDisabled={voucher < item.desc}
                    >
                        Redeem
                    </Button>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Redeem Voucher
                            </AlertDialogHeader>

                            <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Link as={RouterLink} to="/redeem-voucher" display="flex" alignItems="center">
                                <Button colorScheme='red' onClick={onClose} ml={3}>
                                Redeem
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
            {voucher} points
        </Box>
      </Flex>
      {/* <Link href="/Home" id="back-btn" pos="fixed" top="4vw" left="4vw" bg="#F5F5F5" borderRadius="50%" opacity="0.8">
        <Image src="path-to-your-back-image" alt="img" h="50px" />
      </Link> */}
    </>
    );
}

export default RedeemVoucher;