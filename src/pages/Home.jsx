import {useColorModeValue,Badge ,Stack,HStack, Image, Box, Heading, Text, VStack, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import ContactForm from '../components/Contacts'
import SingleMasterClass from '../components/SingleMasterClass'
import Footer from '../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <><SimpleGrid  >
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyItems="center"
        px={['5px','50px','100px']}
         mt='-3'
        pb={12}
        bg={useColorModeValue('gray.50','gray.700')}
      >
        <VStack gap={1} mb='12' ml={["","","",150]}>
            <Text 
               fontSize='bold'
               as={Heading}
               textAlign="center"
               maxW={['200px','250px','400px']}
               minW={'','','350px'}
               mt={10}
               p={1}
               color={useColorModeValue('gray.500','gray.300')}
               query='Réveille'
               styles={{ px: '1', py: '1', bg: 'orange' }}>
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
     <Box
        px={['5px','50px','100px']}
        pb='20'
        w='full'
        bg={useColorModeValue('gray.200','gray.800')}
        >
              <SimpleGrid
              maxW={['300','400','700','900']}
              bg={useColorModeValue('gray.100','gray.600')}
              h='auto'
              mx='auto'
              gap={3}
              columns={['2','2','4','4']}
              borderRadius='20px'
              p={3}
              transform='translateY(-60px)'
              zIndex='100'
              >
               <SimpleGrid
                  boxShadow='2xl'
                  justifyItems='center'
                  rounded='2xl'>
                  <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
                    6k abonnés
                  </Text>
                  <Image display={['none','none','block','block']}  src={work} minW='24' maxW='90'/>
               </SimpleGrid>
               <SimpleGrid boxShadow='2xl' justifyItems='center' rounded='2xl'>
                  <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
                    3000 vidéos
                  </Text>
                  <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
               </SimpleGrid>
               <SimpleGrid boxShadow='xl' justifyItems='center' rounded='2xl'>
                  <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
                    500 étudiants
                  </Text>
                  <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
               </SimpleGrid>
               <SimpleGrid boxShadow='xl' justifyItems='center' rounded='2xl'>
                  <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
                    8 projets
                  </Text>
                  <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
               </SimpleGrid>
            </SimpleGrid>
       <Heading pb={12} color={useColorModeValue('gray.500','gray.400')} >
         Masterclass
       </Heading>
          
       <SimpleGrid             
         columns={['1','1','2','3']}
         mx={['12','10','1','1']}
         gap={3}>
          <SingleMasterClass level='1' author='Mamadou Thiam'    title='Excel: Découverte'  image='excel.png'/>
          <SingleMasterClass level='2' author='Momo'             title='Apprendre Excel'    image='data.svg'/>
          <SingleMasterClass level='3' author='Djiby Mbaye'      title='Analyse avec Excel' image='advencedexcel.jpg'/>
          <SingleMasterClass level='4' author='Ousseynou Fofana' title='Excel: Les Macros'  image='advencedexcel.jpg'/>
       </SimpleGrid>
     </Box>
     <Box
        px={['5px','50px','100px']}
        w='full'
        bg={useColorModeValue('white','gray.800')}
      >
       <Heading
          mb={5}
          color={useColorModeValue('gray.500','gray.400')} >
         Derniers articles
       </Heading>
     </Box>
     <Box
        px={['5px','50px','100px']}
        w='full'
        bg={useColorModeValue('whiteAlpha','gray.700')}
        >
       <ContactForm/>
     </Box>
     

     </SimpleGrid>
    </>
  );
};

export default Home;
