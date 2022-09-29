import React from "react";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
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
      {menus.map((menu) => (
        <ChakraLink
          as={Link}
          display="flex"
          columnGap={2}
          alignItems="center"
          to={menu.to}
          _focus={{
            borderBottom: "1px solid blue",
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
