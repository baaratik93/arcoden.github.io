import addNew from '../../api/courses/add'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Textarea,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    Link,
    VStack,
  } from '@chakra-ui/react';
  import { useState } from 'react';

  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const newCourse = () => {
    const handleSubmit = () => {
         addNew({
            title: "Javascript: les bases",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis libero fugiat fugit sunt deleniti quasi repellendus quaerat, labore soluta, necessitatibus quia praesentium, aspernatur sequi expedita inventore enim dolorem impedit repudiandae.",
            author: "Mamadou Thiam",
            duration:'2h46mn23s',
            videos: [{
                link:"#",
                title:"Introduction au JS",
            },
            {
                link:"#",
                title:"Les variables",
            },
            {
                link:"#",
                title:"Les types",
            },
            {
                link:"#",
                title:"Les entrés sorties",
            }],

            niveau: 1,
            status: 'en cours',
            language: 'Pulaar'
        })
    }
  return <Flex
  mt='-40'
  minH={'100vh'}
  align={'center'}
  justify={'center'}
  bg={useColorModeValue('gray.50', 'gray.800')}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} textAlign={'center'}>
        Créer une formation
      </Heading>
      <Text fontSize={'lg'} color={'gray.600'}>
        Profitez d'un maximum de visibilité ✌️
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
        <FormControl id="email" isRequired>
        <FormLabel>Nom de la formation</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="status" isRequired>
        <FormLabel>Status de la formation</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="niveau" isRequired>
        <FormLabel>Niveau de la formation</FormLabel>
        <Select>
            <option value={1}>Débutant</option>
            <option value={2}>Intermédiare</option>
            <option value={3}>Anvancé</option>
            <option value={4} selected>Expert</option>
        </Select>
      </FormControl>
        </Box>
        
      <Box>
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea rows="8"/>
      </FormControl>
          </Box>
        </HStack>
        <FormControl id="videos" isRequired>
          <FormLabel>Selectionner les vidéos</FormLabel>
          <Input type="file" />
        </FormControl>
        <HStack>
        <FormControl id="duree" isRequired>
          <FormLabel>Durée</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="author" isRequired>
          <FormLabel>Auteur</FormLabel>
          <Input type="text" />
        </FormControl>
        </HStack>
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Enrégistrer la formation
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Flex>
}

export default newCourse