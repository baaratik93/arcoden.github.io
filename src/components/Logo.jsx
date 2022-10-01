import { Image } from '@chakra-ui/image'
import { Text,Box } from '@chakra-ui/layout'
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
          borderRadius="xl"
          px={3} 
          h={50}>
        <Image
          src='/Puzzle.svg'
          mx={3} 
          w={8} 
          h={8}
        />
        <Text as="h2"
          color="gold" 
          fontWeight="bold"
          fontFamily='cursive'
          >
            arcoden
        </Text>
    </Box>
     </Link>
}

export default Logo