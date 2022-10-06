import {useColorModeValue,Badge ,Stack,HStack, Image, Box, Heading, Text, VStack, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import sailor from "../images/sailor.png";
import isometric from "../images/isometric.png";
import work from "../images/work.png";
import ContactForm from '../components/Contacts'
import Footer from '../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <><SimpleGrid gap={10} >
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyItems="center"
        px={['5px','50px','100px']}
        pb={12}
        bg={useColorModeValue('white','gray.700')}
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
               color={useColorModeValue('gray.500','gray.300')}
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
        bg={useColorModeValue('gray.100','gray.700')}
        h='auto'
        mx='auto'
        mt='-20'
        gap={3}
        columns={['2','2','4','4']}
        borderRadius='20px'
        left={['5','10','30','50']}
        right={['5','10','30','50']}
        p={3}
        zIndex='100'
        >
         <SimpleGrid
            boxShadow='lg'
            justifyItems='center'
            rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
              6k abonnés
            </Text>
            <Image display={['none','none','block','block']}  src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
              3000 vidéos
            </Text>
            <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
              500 étudiants
            </Text>
            <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
         </SimpleGrid>
         <SimpleGrid boxShadow='lg' justifyItems='center' rounded='2xl'>
            <Text fontSize={20} fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
              8 projets
            </Text>
            <Image display={['none','none','block','block']} src={work} minW='24' maxW='90'/>
         </SimpleGrid>
      </SimpleGrid>
     <Box
        px={['5px','50px','100px']}
        pb='20'
        w='full'
        mt='-20'
        bg={useColorModeValue('gray.200','gray.800')}
        >
       <Heading
        py={5}
        mt={['50','50','20','20']}
        color={useColorModeValue('gray.500','gray.400')} >
         Masterclass
       </Heading>
          
       <SimpleGrid             
         columns={['1','1','2','3']}
         mx={['12','10','1','1']}
         gap={5}>
          <SimpleGrid
            boxShadow='lg'
            bg='gray.100'
            justifyContent='left'
            gap='3'
            rounded='lg'
            cursor='pointer'>
             <HStack p={5} >
                <Image src='excel.png' width='200' h='130' rounded='lg'/>
             <Heading
                as='h2'
                size='md'
                mx='auto'
             >
                Apprendre Excel
             </Heading>
             </HStack>
             <SimpleGrid gap='1' py={5}>
              <Badge mx='20' colorScheme='green'>Niveau 1</Badge>
              <Badge mx='20' colorScheme='red'>Débutant</Badge>
              <Badge mx='20' colorScheme='purple'>Par Mamadou H. Thiam</Badge>
             </SimpleGrid>
          </SimpleGrid>

          <SimpleGrid
            boxShadow='lg'
            bg='gray.100'
            justifyContent='left'
            gap='3'
            rounded='lg'
            cursor='pointer'>
             <HStack p={5} >
                <Image src='advencedexcel.jpg' width='50' h='130' rounded='lg'/>
             <Heading
                as='h2'
                size='md'
                mx='auto'
             >
                Apprendre Excel
             </Heading>
             </HStack>
             <SimpleGrid gap='1' py={5}>
              <Badge mx='20' colorScheme='green'>Niveau 2</Badge>
              <Badge mx='20' colorScheme='red'>Avancé</Badge>
              <Badge mx='20' colorScheme='purple'>Par Mamadou H. Thiam</Badge>
             </SimpleGrid>
          </SimpleGrid>

          <SimpleGrid
            boxShadow='lg'
            bg='gray.100'
            justifyContent='left'
            gap='3'
            rounded='lg'
            cursor='pointer'>
             <HStack p={5} >
                <Image src='excel.png' width='20' h='90' rounded='lg'/>
             <Heading
                as='h2'
                size='md'
                mx='auto'
             >
                Apprendre Excel
             </Heading>
             </HStack>
             <SimpleGrid gap='1' py={5}>
              <Badge mx='20' colorScheme='green'>Niveau 1</Badge>
              <Badge mx='20' colorScheme='red'>13-06-93</Badge>
              <Badge mx='20' colorScheme='purple'>Par Mamadou H. Thiam</Badge>
             </SimpleGrid>
          </SimpleGrid>

          <SimpleGrid
            boxShadow='lg'
            bg='gray.100'
            justifyContent='left'
            gap='3'
            rounded='lg'
            cursor='pointer'>
             <HStack p={5} >
                <Image src='excel.png' width='20' h='90' rounded='lg'/>
             <Heading
                as='h2'
                size='md'
                mx='auto'
             >
                Apprendre Excel
             </Heading>
             </HStack>
             <SimpleGrid gap='1' py={5}>
              <Badge mx='20' colorScheme='green'>Niveau 1</Badge>
              <Badge mx='20' colorScheme='red'>13-06-93</Badge>
              <Badge mx='20' colorScheme='purple'>Par Mamadou H. Thiam</Badge>
             </SimpleGrid>
          </SimpleGrid>
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
