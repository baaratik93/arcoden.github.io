import {useColorModeValue, Image, Box, Heading, Text, VStack, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import ContactForm from '../components/Contacts'
import Footer from '../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <><Box pos='relative'>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyItems="center"
        px={['5px','50px','100px']}
        pb={12}
        bg={useColorModeValue('gray.300','gray.700')}
      >
        <VStack gap={1} mb='12' ml={["","","",150]}>
            <Text
               fontSize='bold'
               as={Heading}
               textAlign="center"
               style={
                {
                  lineHeight:'1.2',
                  wordSpacing:'3px',
                  fontFamily: 'Open Sans'
                }
               }
               maxW={['200px','250px','400px']}
               minW={'','','350px'}
               mt={10}
               p={1}
               color={useColorModeValue('gray.600','gray.300')}
               >
              Réveille le génie de la programmation qui dort en toi!!!
            </Text>
              <Button
                bg='blue.800'
                _hover={{ bg: "blue.900" }}
                fontSize={["11", "12", "14", "16"]}
              >
                <Text color='gold'>Commencez-ici!</Text>
              </Button>
          </VStack>
      <Carousel autoPlay autoFocus infiniteLoop interval={2500}>
        <Image src={sailor}  maxW="md" maxH="md" />
        <Image src={isometric}   maxW="md" maxH="md" />
        <Image src={work}   maxW="md" maxH="md" />
      </Carousel>
      </Flex>
      <SimpleGrid
        maxW={['300','400','700','900']}
        bg={useColorModeValue('gray.200','gray.500')}
        h='auto'
        mx='auto'
        gap={3}
        columns={['2','2','4','4']}
        borderRadius='20px'
        left={['5','10','30','50']}
        right={['5','10','30','50']}
        p={3}
        zIndex='100'
        pos='absolute'
        mt={['-140','-145','-90','-75']}
        >
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color='blue.800' fontFamily='Sans'>
              6k abonnés
            </Text>
            <Image  src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color='blue.800' fontFamily='Sans'>
              3000 vidéos
            </Text>
            <Image src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color='blue.800' fontFamily='Sans'>
              500 étudiants
            </Text>
            <Image src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color='blue.800' fontFamily='Sans'>
              8 projets
            </Text>
            <Image src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         </SimpleGrid>
     <Box
        px={['5px','50px','100px']}
        pt='100px' pos='absolute'
        w='full'
        mt='-2'
        bg={useColorModeValue('gray.400','gray.800')}
        h={400}
        >
       <Heading
         mb={5}
        borderBottom='1px'
        borderColor='blue.800'
        mt={['50','50','20','20']}
        color={useColorModeValue('white','gold')} >
         Masterclass
       </Heading>
       <SimpleGrid columns='3' gap={20}>
          <Box>
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh5
             useSystemColorModh
          </Box>
          <Box>
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
          </Box>
          <Box>
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
             useSystemColorModh
          </Box>
       </SimpleGrid>
     </Box>
     <Box
        px={['5px','50px','100px']}
        py={12} pos='absolute'
        w='full'
        mt='392'
        h={400}
        bg={useColorModeValue('gray.400','gray.800')}
      >
       <Heading
          mb={5}
          borderBottom='1px'
          borderColor='blue.800'
          mt='10'
          color={useColorModeValue('white','gold')} >
         Derniers articles
       </Heading>
     </Box>
     <Box
        px={['5px','50px','100px']}
        py={12}
        pos='absolute'
        w='full'
        mt='792'
        bg={useColorModeValue('gray.300','gray.700')}
        >
       <ContactForm/>
     </Box>
     <Box
        py={0} pos='absolute'
        w='full'
        mt='1500'
        bg='gray.300'>
           <Footer/>
     </Box>

     </Box>
    </>
  );
};

export default Home;
