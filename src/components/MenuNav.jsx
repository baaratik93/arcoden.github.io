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
              bg="blue.200"
              p={1}>    
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
                  _before = {
                        {
                          content: '""',
                          mb:"-10px",
                          pos: 'fixed',
                          bg: 'blue.400',
                          h: '58px',
                          w: '100px',
                          right: '0',
                          top: '0',
                          borderRadius: '5px',
                          zIndex: '-1010'
                        }
                      }
                  >
                  <HamburgerMenu/>
                  <MenuDrawer/>
                  <ToggleColorMode/>
                </Flex>
          </Flex>
              };
