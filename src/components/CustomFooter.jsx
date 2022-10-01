import React from 'react'
import { Box } from '@chakra-ui/layout';
import {useColorMode} from "@chakra-ui/react"
const CustomFooter = ({children}) => {
const {colorMode} = useColorMode()
const footFontColor = {
  dark: "white",
  light: "lightgreen"
}
const FootBackground = {
  dark: "blue.200",
  light: "gray"
}
  return <Box mx={['5px','50px','100px']}pos={["","","fixed"]} color={footFontColor[colorMode]} bottom={0} right={0} left={0} bg={FootBackground[colorMode]} >
            {children}
        </Box>
}

export default CustomFooter