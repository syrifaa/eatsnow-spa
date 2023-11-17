import {
  Text,
  Box,
  Input,
  Flex,
  useToast,
  FormControl,
  FormLabel,
  CircularProgress,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosController from "../utils/axios";


const APPURL = "http://eatsnow-app:8080/";

function Login() {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: { target: { value: string } }) => setEmail(e.target.value);
  const handlePasswordChange = (e: { target: { value: string } }) => setPassword(e.target.value);
  
  const disableWhenEmpty = () => {
    if (email === "" || password === "" || !email.includes("@")) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    disableWhenEmpty();
  }, [email, password]);

  const handleLogin = async () => {
      try {
        setIsDisabled(true);
        setIsLoading(true);

        const response = await axiosController({
          method: "POST",
          url: `/login`,
          data: {
            email: email,
            password: password,
          },
        });


        if (response.status === 200) {
          toast({
            title: "Login Success",
            description: "You have been logged in!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        } else if (response.status === 403 || response.status === 404) {
          toast({
            title: "Login Failed",
            description: "Please check your email and password!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Login Failed",
            description: "Something went wrong!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error: any) {
        if (error.response?.status === 403 || error.response?.status === 404) {
          toast({
            title: "Login Failed",
            description: "Please check your email and password!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Login Failed",
            description: "Something went wrong!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } finally {
        setIsDisabled(false);
        setIsLoading(false);
      }
    }

  
  



  return (
    <>
      <Flex align="center" justify="center" minH="100vh" direction="column">
        <Box w={[300, 400, 500]}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="5">Login</Text>
            <FormControl m={4} isRequired>
              <FormLabel fontWeight="bold">Email</FormLabel>
              <Input type="email" id="email" name="email" bg="#D9D9D9" borderRadius="20" placeholder="email@mail.com" onChange={handleEmailChange} />

              <Text id="emailError" color="red" fontSize="sm" fontWeight="lighter" mt="0" />
            </FormControl>

            <FormControl m={4} isRequired>
              <FormLabel fontWeight="bold">Password</FormLabel>
              <Input type="password" id="password" name="password" bg="#D9D9D9" borderRadius="20" placeholder="********" onChange={handlePasswordChange} />
              {/* <Text id="passwordError" color="red" fontSize="sm" fontWeight="lighter" mt="0" /> */}
            </FormControl>

            <Flex justify="center"> {/* Center the button horizontally */}
              <Button
                type="submit"
                id="submit-login"
                isDisabled={isDisabled}
                bgColor="#1C1C1C"
                borderColor="#FFF177"
                borderWidth="3px"
                color="#FFF177"
                _hover={{ color: "#FFEC44", bgColor: "#363636", borderColor: "FFE500" }} 
                _active={{ color: "#FFE500", bgColor: "#252525", borderColor: "A90" }}
                fontWeight="bold"
                fontSize="md"
                w="135px"
                h="50px"
                mt="5"
                borderRadius="20"
                marginBottom={4}
                disabled={isDisabled}
                onClick={handleLogin}
              >
                { isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="yellow.500" />
                ) : (
                  "Login"
                )}
              </Button>
            </Flex>
          <Text textAlign="center" fontSize="sm" fontWeight="lighter" mt="2">
            Don't Have an Account? Subscribe in our {}
            <Link to={ APPURL } style={{ color: "blue.500", textDecoration: "underline", display: "inline" }}>EatsNow App</Link> 
            {} to get premium access
          </Text>
        </Box>
      </Flex>
      {/* <Link href="/Home" id="back-btn" pos="fixed" top="4vw" left="4vw" bg="#F5F5F5" borderRadius="50%" opacity="0.8">
        <Image src="path-to-your-back-image" alt="img" h="50px" />
      </Link> */}
    </>
  );
};

export default Login;