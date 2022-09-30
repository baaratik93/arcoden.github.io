import React from 'react'
import { Menu,MenuList,MenuItem,MenuButton,IconButton} from "@chakra-ui/react";
import { HamburgerIcon } from 
"@chakra-ui/icons";
import {useNavigate} from "react-router-dom"
import menus from '../utils/menus';

const HamburgerMenu = () => {
    const router = useNavigate()

  return <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} bg="transparent" color="green" rounded="3xl" as={IconButton} icon={<HamburgerIcon />}  display={["block", "block","none", "none"]}/>
      <MenuList bg='green.300'>
        {
          menus.map((menu ,k) => <MenuItem key={k}  icon={menu.icon} onClick={()=> router(menu.to)}>{menu.name}</MenuItem>)
        }
      </MenuList>
    </>
  )}
</Menu>
}

export default HamburgerMenu