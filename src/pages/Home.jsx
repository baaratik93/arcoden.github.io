import { Image, Box, Heading, Text, VStack, Flex, Button } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <><Box pos='relative'>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyItems="center"
        my={1}
        px={['5px','50px','100px']}
        pb={12}
        bg='gray.100'
      >
        <VStack gap={1} ml={["","","",150]}>
            <Text
               fontSize='bold'
               as={Heading}
               textAlign="center"
               fontSize={40}
               style={
                {
                  lineHeight:'1.2',
                  wordSpacing:'3px',
                  fontFamily: 'Open Sans'
                }
               }
               maxW={['200px','250px','400px']}
               minW={'','','350px'}
               p={3}
               color='blue.400'
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
      <Box
        maxW={['300','400','700','900']}
        bg='white'
        mx='auto' 
        borderRadius='30px'
        left='50'
        right='50'
        p={10}
        zIndex='100'
        pos='absolute'
        mt='-65'
        >
       Statistique du site
     </Box>
     <Box
        px={['5px','50px','100px']}
        py={12} pos='absolute'
        w='full'
        mt='-2'
        h={400}
        bg='gold'>
       Derniers masterclass
     </Box>
     <Box
        px={['5px','50px','100px']}
        py={12} pos='absolute'
        w='full'
        mt='392'
        h={400}
        bg='tomato' >
       Derniers articles
     </Box>
     </Box>
    </>
  );
};

export default Home;
