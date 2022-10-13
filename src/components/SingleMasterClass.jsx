import {Box,HStack,Flex,Text,Heading,Badge,Image, useColorModeValue} from '@chakra-ui/react'

const SingleMasterClass = ({title, level, author, image, language, videos, body}) => {
	const ShowLevel = (level) => {
		const levels = ['null','Débutant','Intermediaire','Avancée','Expert'];
		return levels[level]
	}
	return <Box
				pos='relative'
				w="auto"
				h="300"
				boxShadow='2xl'
				rounded='lg'
				overflow='hidden'
				cursor='pointer'
				zIndex='100'
				mb={10}
				bg={useColorModeValue('transparent','gray.700')}
				_hover={{
					bg: 'gray.300',
					width: '100%',
					height: '100%',
					transform: 'rotateZ(-1deg) scale(.9)',
					transition: '200ms all'
				}}
			>
			<Badge
				rounded='lg'
				as={Text}
				colorScheme={useColorModeValue('purple','yellow')}
				textTransform='lowercase'
				pos='absolute'
				top='0'
				right='0'>
					{ShowLevel(level)}
			</Badge>
			<HStack p={3} pos='absolute' gap={1} left='0' right='0'>
				<Image src={image} h="140" w={150}/>
				<Heading size={['xs','md','md','md']}>{title}</Heading>
			</HStack>
			<Text pos='absolute'
				  top='54%'
				  fontSize={['12','13','12','11']}
				  px='5'>
				{body}
			</Text>
			<Flex justifyContent='center'
				  alignItems='center'
				  bg={useColorModeValue('gray.400','gray.600')}
				  pos='absolute'
				  top='85%'
				  left='0's
				  right='0'
				  bottom='0'
				  gap={10}
				  p={5}>
				<Heading
					size='xs'
					rounded='lg'
					fontSize='12'
					p={1} bg='blue.200'>
						<Badge rounded='md'>
							{videos}
						</Badge>
						videos
				</Heading>
				<Heading
					size='xs'
					fontSize='12'>
						{author}
				</Heading>
				<Heading
					size='xs'
					fontSize='12'>
						{language}
				</Heading>
			</Flex>

		
	</Box>
}

export default SingleMasterClass;