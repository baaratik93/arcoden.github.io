import React from "react";
import { Box, Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import menus from "../utils/menus";

const ListMenu = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      display={["none", "none", "flex", "flex"]}
      minW="50%"
    >
      {menus.map((menu,k) => (
        <ChakraLink
          as={Link}
          display="flex"
          columnGap={2}
          alignItems="center"
          fontFamily="Lato"
          fontSize={18}
          to={menu.to}
          key={k}
          color={useColorModeValue('gray.50','gray.400')}
          _focus={{
            borderBottom: "5px solid gray",
          }}
          _hover={{
            
            boxShadow: "xl"
          }}
        >
          {" "}
          {menu.icon} {menu.name}{" "}
        </ChakraLink>
      ))}
    </Box>
  );
};

export default ListMenu;
