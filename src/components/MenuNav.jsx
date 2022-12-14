import {Box, Flex, Spacer, Input, useColorModeValue} from "@chakra-ui/react";
import Logo from "./Logo";
import ListMenu from "./ListMenu";
import { useState } from "react";
import { ToggleColorMode } from "./ToggleColorMode";
import SidebarMenuDrawer from "./SidebarMenuDrawer";
import SearchDrawer from "./SearchDrawer"



export const MenuNav = () => {
  const [watch, setWatch] = useState(false)

  return  <Flex 
              justifyContent='center'
              alignItems='center' 
              gap={2}
              pos="fixed"
              top='-5'
              left='0'
              right='0'
              as="nav" 
              zIndex="1000"
              mt={5}              
              py={5}
              px={['5px','50px','100px']}
              bg={useColorModeValue('gray.600','gray.800')}
              >

                <Logo/>
                <Spacer/>
                <ListMenu/>
                <Spacer/>
                <Flex
                  gap={2}
                  bg={useColorModeValue('gray.500','gray.700')}
                  p={1}
                  rounded= 'md'
                  boxShadow= 'md'
                  >
                  <SidebarMenuDrawer/>
                  <SearchDrawer/>
                  <ToggleColorMode/>
                </Flex>
          </Flex>
              };
