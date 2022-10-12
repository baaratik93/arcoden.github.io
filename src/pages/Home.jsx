import {useColorModeValue,Badge ,Stack,HStack, Image, Box, Heading, Text, VStack, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import ContactForm from '../components/Contacts'
import SingleMasterClass from '../components/SingleMasterClass'
import Footer from '../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CustomHeader } from "../components/CustomHeader";
import SingleStats from "../components/SingleStats";

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
      <Carousel showStatus={false} showIndicators={false} showArrows={false} autoPlay autoFocus infiniteLoop interval={2500}>
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
               <SingleStats title="6k abonnés" photo={work}/>
               <SingleStats title="3k videos" photo={work}/>
               <SingleStats title="30 édudiants" photo={work}/>
               <SingleStats title="8 projects" photo={work}/>
            </SimpleGrid>
       
       <CustomHeader title="Masterclass"/>  
          
       <SimpleGrid             
         columns={['1','1','2','3']}
         mx={['12','10','1','1']}
         gap={5}
         >
          <SingleMasterClass
            level='1'
            author='Mamadou Thiam'
            videos='13'
            title='Excel: Découverte'
            image='excel.png'
            language='Poular'
            status="en cours"
            body="Quoi de mieux d'explorer l'ensemble du logiciel Excel
                  avant de l'utiliser. Dans cette série, nous allons vous
                  monter l'environnement qui compose ce tableur."
                  />
          <SingleMasterClass
            level='2'
            author='Momo'
            title='Apprendre Excel'
            image='data.svg'
            body="Après une mûre exploration du tableur Excel, apprenez à
                  l'utiliser en passant par la saisie des données,
                   l'évaluation de formules et de fonctions."
            />
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
