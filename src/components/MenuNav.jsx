import {Box, Flex, Spacer, Input} from "@chakra-ui/react";
import Logo from "./Logo";
import ListMenu from "./ListMenu";
import HamburgerMenu from "./HamburgerMenu";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";
import { ToggleColorMode } from "./ToggleColorMode";



export const MenuNav = () => {
  const [watch, setWatch] = useState(false)

  return  <Flex 
              justifyContent='center'
              alignItems='center' 
              gap={2} pos="sticky" 
              top={0}  as="nav" 
              zIndex="1000"
              mt={5}              
              p={5}
              borderBottom='1px solid skyblue'
              >

                <Logo/>
                <Spacer/>
                <ListMenu/>
                <Spacer/>
                <Flex
                  gap={2}
                  bg='blue.400'
                  p={1}
                  rounded= 'md'
                  boxShadow= 'md'
                  >
                  <HamburgerMenu/>
                  <MenuDrawer/>
                  <ToggleColorMode/>
                </Flex>
          </Flex>
              };
