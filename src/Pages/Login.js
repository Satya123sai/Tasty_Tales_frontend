import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  ChakraProvider,
  InputGroup,
  InputRightElement,
  layoutPropNames,
  
} from '@chakra-ui/react'
import React,{useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {Navigate, useNavigate} from "react-router-dom"

import Axios from "axios"

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleemail = (e)=>{
    setEmail(e.target.value);
    
  }
  const handlepassword = (e)=>{
    setPassword(e.target.value);
    
  }

  const handleLogin = async()=>{
    try{
      await Axios.get("https://tasty-tales-backend.vercel.app/signup").then((e)=>{
        const allUsers = e.data;
        for(var i=0;i<allUsers.length;i++){
          if(allUsers[i]._id == email && allUsers[i].password == password){
            navigate("/home",{state:{email:email,username:allUsers[i].name}});
            break;
          }else if(allUsers[i]._id == email && allUsers[i].password != password){
            alert("Incorrect Password");
            break;
          }else{
            alert("Email not registered");
            break;
          }
        }
      })
      }
    catch(e){
      console.log(e);
    }
  }

  return (
    <ChakraProvider>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://infifashion.com/wp-content/uploads/2022/06/thumbnail-3-1024x683.jpg.webp'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleemail}/>
          </FormControl>
          <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={handlepassword}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
    </ChakraProvider>
  )
}