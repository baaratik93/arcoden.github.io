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
  Flex,
} from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import menus from "../utils/menus";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";


const SidebarMenuDrawer = () => {
  const router = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        display={["block", "block", "none"]}
        colorScheme="transparent"
        onClick={onOpen}
      >
        <RiMenu4Line color={useColorModeValue("white", "gold")} />
      </Button>
      <Drawer size="xs" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="gray.700" borderBottomWidth="10px">
            <Logo />
          </DrawerHeader>
          <DrawerBody bg={useColorModeValue("gray.200", "gray.700")}>
            <Flex flexDirection="column" my={10}>
              {menus.map((menu, k) => (
                <Link
                  textDecoration="none"
                  key={k}
                  icon={menu.icon}
                  p={5}
                //   borderBottom={k != menus.length - 1 && "1px solid"}
                //   borderColor={useColorModeValue("gray.300", "gray.600")}
                  fontSize={22}
                  onClick={() => {
                    router(menu.to);
                    onClose();
                  }}
                  _hover={{
                    bg: useColorModeValue("gray.300","gray.600"),
                    rounded: "2xl",
                    transition: '300ms all',
                    transform: 'scale(1.099)',
                  }}
                >
                  {menu.name}
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenuDrawer;
