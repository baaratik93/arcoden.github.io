import { Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={["column", "column", "row-reverse", "row-reverse"]}
        // display="grid"
        // gridTemplateColumns="1fr 1fr"
        justifyContent="space-around"
        alignItems="center"
        justifyItems="center"
      >
         <Carousel autoPlay autoFocus infiniteLoop interval={2500}>
        <Box>
        <Image src={sailor}  maxW="md" maxH="md" />
        {/* <Text pb={8}>Ecology</Text> */}
        </Box>

        <Image src={isometric}   maxW="md" maxH="md" />
        <Image src={work}   maxW="md" maxH="md" />
      </Carousel>
        <VStack gap={1} ml={["","","",150]}>
          <Text textAlign="center" fontSize={["16px","20","",""]}>
            Oeuvrez à faire du Sénégal un pays d’exception et à créer des
            solutions pour chaque besoin de nos concitoyens.
          </Text>
          <Button
            colorScheme="whatsapp"
            _hover={{ bg: "lime" }}
            fontSize={["11", "12", "14", "16"]}
          >

            <Text>Rejoindre la communauté!</Text>
          </Button>
        </VStack>
      </Box>
     
    </>
  );
};

export default Home;
