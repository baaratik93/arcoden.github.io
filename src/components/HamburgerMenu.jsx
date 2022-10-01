import React from 'react'
import { Menu,MenuList,MenuItem,MenuButton,IconButton} from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import {useNavigate} from "react-router-dom"
import menus from '../utils/menus';
import {useColorMode} from "@chakra-ui/react"

const HamburgerMenu = () => {
    const router = useNavigate()
    const {colorMode} = useColorMode()
    const MenuListColor = {
                    dark: "gold",
                    light: "white"
                  }

  return <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton
          isActive={isOpen}
          bg="transparent"
          rounded="3xl"
          alignContent='center'
          as={IconButton}
          icon={<RiMenu4Line color={MenuListColor[colorMode]} fontSize={26}/>} 
          display={["block", "block","none", "none"]}/>
      <MenuList bg='blue.200' border='none'>
        {
          menus.map((menu ,k) => <MenuItem key={k}  icon={menu.icon} onClick={()=> router(menu.to)}>{menu.name}</MenuItem>)
        }
      </MenuList>
    </>
  )}
</Menu>
}

export default HamburgerMenu