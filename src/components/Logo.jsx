import { Image } from '@chakra-ui/image'
import { Text, HStack, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
const Logo = () => {
  return <Link to="/">
    <HStack
          boxShadow="xl"  
          borderRadius="md"
          bg={useColorModeValue('gray.400','gray.700')}
          h={50}
          p={2}>
        <Image
          src='/Puzzle.svg'
          w={10} 
          h={8}
        />
        <Heading
          as ='h1'
          size='lg'
          color="gold" 
          fontWeight="bold"
          fontFamily='Lobster'
          >
            arcoden
        </Heading>
    </HStack>
     </Link>
}

export default Logo