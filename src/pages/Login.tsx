import {
  Text,
  Box,
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
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function Login() {

  return (
    <>
      <Flex align="center" justify="center" minH="100vh" direction="column">
        <Box w={[300, 400, 500]}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="5">Login</Text>
          <Box m="4">
          <Text fontWeight="bold">Email</Text>
            <Input type="email" id="email" name="email" bg="#D9D9D9" isRequired />
            <Text id="emailError" color="red" fontSize="sm" fontWeight="lighter" mt="0" />
          </Box>
          <Box m="4">
            <Text fontWeight="bold">Password</Text>
            <Input type="password" id="password" name="password" bg="#D9D9D9" isRequired />
            <Text id="passwordError" color="red" fontSize="sm" fontWeight="lighter" mt="0" />
          </Box>
          <Flex justify="center"> {/* Center the button horizontally */}
            <Box
              as='button'
              type="submit"
              id="submit-login"
              bgColor="#1C1C1C"
              borderColor="#FFF177"
              borderWidth="3px"
              color="#FFF177"
              fontWeight="bold"
              fontSize="md"
              w="135px"
              h="50px"
              mt="5"
            >
              Login
            </Box>
          </Flex>
          <Text textAlign="center" fontSize="sm" fontWeight="lighter" mt="2">
            Don't Have an Account? Click 
            {/* <Link href="/Register" color="blue.500" textDecoration="underline" display="inline">here</Link> to sign up */}
          </Text>
        </Box>
      </Flex>
      {/* <Link href="/Home" id="back-btn" pos="fixed" top="4vw" left="4vw" bg="#F5F5F5" borderRadius="50%" opacity="0.8">
        <Image src="path-to-your-back-image" alt="img" h="50px" />
      </Link> */}
    </>
  );
}

export default Login;