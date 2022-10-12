import {Box,HStack,Flex,Text,Heading,Badge,Image, useColorModeValue} from '@chakra-ui/react'

const SingleMasterClass = ({title, level, author, image, language, videos, body,status}) => {
	const ShowLevel = (level) => {
		const levels = ['null','Débutant','Intermediaire','Avancée','Expert'];
		return levels[level]
	}
	return <Box
				pos='relative'
				w="auto"
				h="300"
				p={1}
				boxShadow='2xl'
				rounded='lg'
				overflow='hidden'
				cursor='pointer'
				mb={10}
				bg={useColorModeValue('transparent','gray.700')}
			>
			<Badge
				rounded='lg'
				as={Text}
				colorScheme={useColorModeValue('blue','yellow')}
				textTransform='lowercase'
				pos='absolute'
				top='0'
				right='0'>
				{ShowLevel(level)} / {status} / {language}
			</Badge>
			<Flex justify='center' alignItems='center' p={3} pos='absolute' gap={5} left='0' right='0'>
				<Image src={image} h="140" w={150} p={2}/>
				<Heading size={['xs','md','md','md']}>{title}</Heading>
			</Flex>
			<Text pos='absolute' top='54%' fontSize={['12','13','12','11']} px='5'>
				{body}
			</Text>
			<Flex justify='start' alignItems='center' bg={useColorModeValue('gray.400','gray.600')} pos='absolute' top='85%' left='0' right='0' bottom='0' gap={10} p={5}>
				<Heading size='sm'>{}</Heading>
				<Heading size='sm'>{author}</Heading>
				<Heading size='sm'>{videos?.length} videos</Heading>
			</Flex>

		
	</Box>
}

export default SingleMasterClass;