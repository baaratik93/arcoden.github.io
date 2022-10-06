import { Image } from '@chakra-ui/image'
import { Text, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
const Logo = () => {
  return <Link to="/">
    <Box
          display="flex"
          gap={2}
          boxShadow="xl"  
          alignItems="center"
          borderRadius="md"
          bg={useColorModeValue('gray.400','gray.700')}
          p={5} 
          h={50}>
        <Image
          src='/Puzzle.svg'
          mx={3} 
          w={8} 
          h={8}
        />
        <Heading
          color="gold" 
          fontWeight="bold"
          fontFamily='Lobster'
          >
            arcoden
        </Heading>
    </Box>
     </Link>
}

export default Logo