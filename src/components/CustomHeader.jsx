import { Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const CustomHeader = ({title}) => {
  return <Heading pb={12} color={useColorModeValue('gray.500','gray.400')} >
            {title}
         </Heading>
}
