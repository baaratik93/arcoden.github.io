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
  dark: "grey",
  light: "black"
}
  return <Box  pos={["","","fixed"]} color={footFontColor[colorMode]} bottom={0} right={0} left={0} bg={FootBackground[colorMode]} >
      {children}
  </Box>
}

export default CustomFooter