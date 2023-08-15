import React,{useState,useEffect} from 'react';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  ChakraProvider,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Radio,
  useDisclosure,
} from '@chakra-ui/react';

import {FaHeart,FaUser} from "react-icons/fa";
//import { Lorem } from 'react-lorem-ipsum'; // Import this library or use your own method to get the content

export default function BlogCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');


  return (
    <ChakraProvider>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          position={'relative'}
          zIndex={1}
        >
          <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image
              src={props.image}
              alt="Image"
              objectFit="cover"
              h="100%"
              w="100%"
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {props.name}
            </Heading>
            <Text color={'gray.500'}>
              {props.blog.length > 50 ? `${props.blog.slice(0, 50)}...` : props.blog}
            </Text>
            {props.blog.length > 50 && (
              <Text as="span" color="teal" cursor="pointer" onClick={onOpen}>
              (...read more)
            </Text>
            )}
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar src={props.imageUrl} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600} cursor="pointer" >{props.username}</Text>
              <Text color={'gray.500'}>Aug 22, 2023 · 6min read</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.blog}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
