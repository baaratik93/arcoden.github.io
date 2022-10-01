import { Image,Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyItems="center"
        my={12}
      >
        <VStack gap={1} ml={["","","",150]}>
            <Text
               fontSize='bold'
               as={Heading}
               textAlign="center"
               fontSize={["16px","20","",""]}
               lineHeight={2}
               >
              Réveille tes compétences en développement web!!!
            </Text>
              <Button
                colorScheme="blue"
                _hover={{ bg: "blue.500" }}
                fontSize={["11", "12", "14", "16"]}
              >
                <Text>Commencez-ici!</Text>
              </Button>
          </VStack>
      <Carousel autoPlay autoFocus infiniteLoop interval={2500}>
        <Image src={sailor}  maxW="md" maxH="md" />
        <Image src={isometric}   maxW="md" maxH="md" />
        <Image src={work}   maxW="md" maxH="md" />
      </Carousel>
      </Flex>
     
    </>
  );
};

export default Home;
