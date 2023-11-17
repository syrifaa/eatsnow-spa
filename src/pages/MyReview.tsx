import Navbar from '../components/Navbar';
import { Text, Card, CardBody, Flex, Heading, Link, Stack, Button, useDisclosure, Center, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react";
import React, { useRef } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { SetStateAction, useState } from "react";

function MyReview() {
    interface YourItemType {
      id: number;
      restaurantname: string;
      rating: number;
      content: string;
      // Add other properties as needed
    }
  
    interface YourComponentProps {
      data: YourItemType[];
    }

    const data = [
        {id:1, restaurantname: "Ahoe", rating: 4.7, content: "Enak bangett, minimal makan sekali disini, makanannya diturunin dari surga"},
        {id:2, restaurantname: "KFC", rating: 3.5, content: "Enak ajaa, lebih suka lazatto"},
    ];

    const YourComponent: React.FC<YourComponentProps> = ({ data }) => {
        const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));
        const [ratings, setRatings] = useState(data.map((item) => item.rating));
        const [reviews, setReviews] = useState(data.map((item) => item.content));
    
        const onOpen = (index: number) =>
            setIsOpen((prev) => prev.map((value, i) => (i === index ? true : value)));
    
        const onClose = (index: number) =>
            setIsOpen((prev) => prev.map((value, i) => (i === index ? false : value)));
    
        const cancelRef = useRef<HTMLButtonElement>(null);
    
        const handleRatingChange = (valueString: string, index: number) => {
            const newRatings = [...ratings];
            newRatings[index] = parseFloat(valueString);
            setRatings(newRatings);
        };
    
        const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
            const newReviews = [...reviews];
            newReviews[index] = e.target.value;
            setReviews(newReviews);
        };

        const handleSave = (index: number) => {
            if (reviews[index].trim() === '') {
            // Display an error message or prevent the save operation
            // You can also set an error state to display a message to the user
            console.error('Review cannot be empty');
            } else {
            onClose(index);
            // Perform save operation or navigate to "/my-review"
            }
        };

        const handleCancel = (index: number) => {
            // Revert to the original data when Cancel is clicked
            setRatings((prev) => [...prev.slice(0, index), data[index].rating, ...prev.slice(index + 1)]);
            setReviews((prev) => [...prev.slice(0, index), data[index].content, ...prev.slice(index + 1)]);
            onClose(index);
          };

        return (
            <>
            <Flex align="center" justify="center" minH="100vh" direction="row">
                <Navbar />
                <Stack direction="column" spacing="4">
                    {data.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <Card key={item.id} w={[350, 450, 550]}
                                direction= 'column'
                                overflow='hidden'
                                variant='outline'
                                borderRadius="50"
                                borderColor="black"
                                borderWidth="3px"
                                padding="10px" 
                                >
                                    <CardBody>
                                        <Heading size='md'>Restaurant Name: {item.restaurantname}</Heading>
                    
                                        <Text py='2'>
                                        {item.content}
                                        </Text>
                                    </CardBody>
                                    <Center>
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
                                            onClick={() => onOpen(index)}
                                            >
                                                Edit
                                        </Button>
                                        <AlertDialog
                                            isOpen={isOpen[index]}
                                            leastDestructiveRef={cancelRef}
                                            onClose={() => onClose(index)}
                                        >
                                            <AlertDialogOverlay>
                                            <AlertDialogContent>
                                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                Edit Review
                                                </AlertDialogHeader>
                                                <AlertDialogBody>
                                                    <Box m="4">
                                                    <FormControl>
                                                        <FormLabel fontWeight="bold">Rating</FormLabel>
                                                        <NumberInput bg="#D9D9D9" borderRadius="20" value={ratings[index]} min={0} max={5} step={0.1} precision={1} onChange={(valueString) => handleRatingChange(valueString, index)} isRequired>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                        </NumberInput>
                                                    </FormControl>
                                                    </Box>
                                                    <Box m="4">
                                                        <FormControl>
                                                            <Text fontWeight="bold">Review</Text>
                                                            <Textarea id="review" bg="#D9D9D9" borderRadius="20" h="sm" value={reviews[index]} onChange={(e) => handleReviewChange(e, index)} isRequired />
                                                        </FormControl>
                                                    </Box>  
                                                </AlertDialogBody>
                                                <AlertDialogFooter>
                                                <Link as={RouterLink} to="/my-review" display="flex" alignItems="center">
                                                    <Button
                                                        type="submit"
                                                        id="submit-login"
                                                        colorScheme='green'
                                                        onClick={() => handleSave(index)}
                                                        isDisabled={reviews[index].trim() === ''}
                                                    >
                                                        Save
                                                    </Button>
                                                </Link>
                                                <Button colorScheme='red' onClick={() => handleCancel(index)}>
                                                    Cancel
                                                </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                            </AlertDialogOverlay>
                                        </AlertDialog>
                                    </Center>   
                                </Card>
                        </React.Fragment>
                    ))}
                </Stack>
            </Flex>
            </>
        );
    };
    return <YourComponent data={data}/>;
}
export default MyReview;