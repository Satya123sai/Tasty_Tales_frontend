import React, { useState } from 'react';
import Axios from "axios";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  ChakraProvider,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useNavigate, useLocation } from 'react-router-dom'

export default function About() {

  const navigate = useNavigate()

  const location = useLocation();

  const { email, username, password, } = location.state;

  const [image, setImage] = useState("https://bit.ly/sage-adebayo");
  const [imageUrl, setImageUrl] = useState(image);
  const [bio,setBio] = useState(null);
  

  const handleChange = ()=>{
    setImageUrl(image);
  }

  const handleCancel = ()=>{
    setBio('');
  }

  const handleSubmit = async()=>{
    try{
      await Axios.post("https://tasty-tales-backend.vercel.app/signup",{username:username,email:email,password:password,imageUrl:imageUrl,bio:bio}).then((e)=>{
        if(e.data == "The email is already registered"){
          alert("The email is already registered");
          navigate("/");
        }else{

          navigate("/home",{state:{username:username,email:email,password:password,imageUrl:imageUrl,bio:bio}})
        }
      })

    }catch(e){
      console.log(e);
    }
  }

  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Create Your Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={imageUrl}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="green"
                    aria-label="remove Image"
                  // icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <FormControl>
                  <FormLabel>Enter Photo Link</FormLabel>
                  <Input 
                  placeholder="https://image1.png" 
                  onChange={(e)=>setImage(e.target.value)}
                  
                  />

                  <Button
                    bg={'blue.300'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    mt={'10px'}
                    onClick={handleChange}
                  >
                    Change
                  </Button>
                </FormControl>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="bio" isRequired>
            <FormLabel>Enter Your Bio</FormLabel>
            <Textarea
              placeholder="Hello Everyone..."
              _placeholder={{ color: 'gray.500' }}
              rows={8}
              size={'lg'}
              onChange={(e)=>setBio(e.target.value)}
              value={bio}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}
              onClick={handleCancel}
              >
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleSubmit}
              >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </ChakraProvider>
  )
}