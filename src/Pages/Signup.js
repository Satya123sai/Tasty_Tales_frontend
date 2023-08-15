import "./styles.css";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  ChakraProvider,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Navigate, useNavigate } from "react-router-dom"
import background from "../images/Food-Blogs-2.jpg"

import Axios from "axios"

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);

  const handleusername = (e) => {
    setUsername(e.target.value);

  }
  const handleemail = (e) => {
    setEmail(e.target.value);

  }
  const handlepassword = (e) => {
    setPassword(e.target.value);

  }
  const handlesignup = async () => {
    try {
      if (username == null || email == null) {
        alert("Username or Email can't be empty");
      }
      else {
        navigate("/about",{state:{username:username,password:password,email:email}})
      }

    } catch (e) {
      console.log(e);
    }
  }

  const handleLogin = () => {
    navigate("/login");
  }


  return (
    <ChakraProvider>
      <div class="signupbg" >
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        background={`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${background})`}
        // bgImage={`url(${background})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        //filter="brightness(0.9)" // Adjust the filter value as needed
      >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'}  >
                And Start Blogging ✌️.
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="username" isRequired>
                      <FormLabel>User name</FormLabel>
                      <Input type="text" onChange={handleusername} w={'100%'}/>
                    </FormControl>
                  </Box>
                
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" onChange={handleemail} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} onChange={handlepassword} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={handlesignup}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'blue.400'} onClick={handleLogin}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </div>
    </ChakraProvider>
  )
}