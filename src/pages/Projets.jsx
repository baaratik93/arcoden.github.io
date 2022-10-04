import { Box, SimpleGrid, Heading,Text } from '@chakra-ui/layout'
import React from 'react'
import { FiBox,FiInstagram } from 'react-icons/fi'

const Projets = () => {
  return <Box mt={20}>
    <Heading textAlign="center" my={20}  >Nos projets</Heading>
  <SimpleGrid
   gap={3}
   mx={20}
   columns={['1','2','3','4']} >
    <Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text><Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text><Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text><Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text>
    <Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text><Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text><Text bg='blue.300' p={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium magnam fuga doloribus, qui dolorem inciduntmb adipisci
      aliquid delectus dignissimos vitae quasi facilis id nostrum.
      Animi vero velit qui cumque aliquid?
    </Text>
  </SimpleGrid>
    
  </Box>
}

export default Projets