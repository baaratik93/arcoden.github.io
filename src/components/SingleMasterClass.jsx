import {Box,HStack,Flex,Text,Heading,Badge,Image, useColorModeValue} from '@chakra-ui/react'

const SingleMasterClass = ({title, level, author, image}) => {
	return <Box
				pos='relative'
				w="auto"
				h="300"
				boxShadow='2xl'
				mb={3}
			>
			<Badge as={Text} colorScheme='red' textTransform='lowercase' pos='absolute' top='0' right='0'>
					{level==1 && 'Débutant'}
					{level==2 && 'Intermédiare'}
					{level==3 && 'Avancé'}
					{level==4 && 'Expert'}
			</Badge>
			<HStack p={3} pos='absolute' gap={1} left='0' right='0'>
				<Image src={image} h="150" w={150}/>
				<Heading size={['xs','md','md','md']}>{title}</Heading>
			</HStack>
			<Text pos='absolute' top='60%' fontSize={['12','13','13','11']} px='5'>
				Quoi de mieux d'explorer l'ensemble du logiciel Excel
				avant de l'utiliser. Dans cette série, nous allons vous
				monter l'environnement qui compose ce tableur.
			</Text>
			<Flex justifyContent='center' alignItems='center' bg='gray.300' pos='absolute' top='95%' left='0' right='0' bottom='0' gap={10} p={5}>
				<Heading size='sm'>{level}</Heading>
				<Heading size='sm'>{author}</Heading>
				<Heading size='sm'>{}</Heading>
			</Flex>

		
	</Box>
}

export default SingleMasterClass;
