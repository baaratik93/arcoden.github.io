import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useColorModeValue,
    useDisclosure,
    VStack,
    Link,
    Flex
  } from '@chakra-ui/react'
  import { RiMenu4Line } from "react-icons/ri";
  import menus from '../utils/menus';
  import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

  
 const SidebarMenuDrawer = () => {
    const router = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
            <Button display={['block','block','none']} colorScheme='transparent' onClick={onOpen}>
                <RiMenu4Line color={useColorModeValue('white','gold')}/>
            </Button>
            <Drawer size='xs' placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader bg='gray.700' borderBottomWidth='1px'><Logo/></DrawerHeader>
                <DrawerBody bg= {useColorModeValue('gray.200','gray.700')}>
                <Flex
                flexDirection='column'
                my={10}
                >
                {
                    menus.map((menu ,k) => <Link 
                                                textDecoration='none'
                                                key={k}
                                                icon={menu.icon}
                                                p={8}
                                                borderBottom={k!=menus.length-1 && '1px solid'}
                                                borderColor='gray.300'
                                                fontSize={22}
                                                onClick={() => {
                                                router(menu.to)
                                                onClose()} }
                                                _hover={
                                                    {
                                                        bg:'gray.100',
                                                        rounded: '2xl'
                                                    }
                                                }
                                            >
                                                    {menu.name}
                                            </Link>)
                  }
                </Flex>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            </>
  }
  
  export default SidebarMenuDrawer;