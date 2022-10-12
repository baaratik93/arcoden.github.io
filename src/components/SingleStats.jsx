import { useColorModeValue, Flex,Text,Image as Photo } from "@chakra-ui/react"

const SingleStats = ({title, photo}) => {
  return <Flex
  boxShadow='2xl'
  justify='center'
  align='center'
  flexDirection={['column','column','column','row']}
  bg={useColorModeValue('gray.300','gray.700')}
  rounded='lg'>
  <Text
    fontSize={20} 
    fontWeight='bold' color={useColorModeValue('gray.600','gray.400')} fontFamily='Sans'>
    {title}
  </Text>
  <Photo display={['none','block','block','block']}  src={photo} minW='24' maxW='90'/>
</Flex>
}

export default SingleStats;