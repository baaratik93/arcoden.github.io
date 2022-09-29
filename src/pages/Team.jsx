import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Actor from '../components/Actor'
import {Link} from "react-router-dom"
import actors from '../utils/actors'

const Team = () => {
  function ActorHandler(id) {
    alert(id)
  }
  return <VStack>
    <Heading m={10} >
      Notre équipe
    </Heading>
  
    <Box 
    display="grid" 
    gap={3}
    gridTemplateColumns={[
      "1fr","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"
    ]}
    >
      {
        actors.map((actor,k) =>  <Actor key={k} id={actor.id} image={actor.image} name={actor.name} title={actor.title}/>)
      }
    
    </Box>
    
    </VStack>
}

export default Team
