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
          //clipPath="polygon(0% 0%, 100% 1%, 75% 100%, 0% 100%);"
          boxShadow="xl"  
          alignItems="center"  
          px={3} 
          h={50}>
        <Image
          src='/Puzzle.svg'
          mx={3} 
          w={8} 
          h={8}
        />
        <Text as="h2"
          color="white" 
          fontWeight="bold">
            ARCODEN
        </Text>
    </Box>
     </Link>
}

export default Logo