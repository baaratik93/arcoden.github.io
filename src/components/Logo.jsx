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
          _before = {
            {
              content: '""',
              clipPath:"polygon(0% 0%, 100% 1%, 75% 100%, 0% 100%)",
              mb:"-10px",
              pos: 'fixed',
              bg: 'blue.700',
              h: '70px',
              w: '200px',
              left: '0',
              opacity: '.4',
              borderRadius: '5px'
            }
          }
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