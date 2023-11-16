import {
    Text,
    Textarea,
    Box,
    CloseButton,
    Flex,
    Link,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useDisclosure,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";
import React, { useRef } from 'react';
import { SetStateAction, useState } from "react";
import { Link as RouterLink} from 'react-router-dom';

function AddReview() {
  const [input, setInput] = useState('')
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => setInput(e.target.value)
  const isError = input === ''
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
  <>
    <Flex align="center" justify="center" minH="100vh" direction="column">
      <Box w={[300, 400, 500]}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="5">Restaurant Name</Text>
        <Box m="4">
          <FormControl>
            <FormLabel fontWeight="bold">Rating</FormLabel>
            <NumberInput bg="#D9D9D9" borderRadius="20" defaultValue={0.0} min={0} max={5} step={0.1} precision={1} isRequired>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>
        <Box m="4">
          <FormControl isInvalid={isError}>
            <Text fontWeight="bold">Review</Text>
            <Textarea id="review" bg="#D9D9D9" borderRadius="20" h="sm" onChange={handleInputChange} isRequired />
            {isError? <Text color="red" fontSize="sm">Please enter your review</Text> : null}
          </FormControl>
        </Box>
        <Flex justify="center">
          <Button
            type="submit"
            id="submit-login"
            bgColor="#FFF177"
            borderColor="#1C1C1C"
            borderWidth="3px"
            color="#1C1C1C"
            fontWeight="bold"
            fontSize="md"
            w="135px"
            h="50px"
            mt="5"
            borderRadius="20"
            onClick={onOpen}
            isDisabled={isError}
          >
            Add Review
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Add Review
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't delete this review afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Link as={RouterLink} to="/" display="flex" alignItems="center">
                    <Button colorScheme='green' onClick={onClose} ml={3}>
                      Add
                    </Button>
                  </Link>
                  <Button ref={cancelRef} colorScheme='red' onClick={onClose}>
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Box>
      <Link as={RouterLink} to="/" display="flex" alignItems="center">
        <Box
        pos="fixed"
        top="10px"
        right="10px"
        >
            <CloseButton size="lg" />
        </Box>
      </Link>
    </Flex>
  </>
  );
}

export default AddReview;