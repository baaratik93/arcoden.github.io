import React from 'react'
import {Heading, FormControl,FormLabel,Input,Textarea,Container} from "@chakra-ui/react"
const Contacts = () => {
  return <>
   <Container as="form" onSubmit={()=>{alert("Submitted")}} >
   <Heading  my={10}>Remplissez ce formulaire puis envoyez!</Heading>
   < FormControl>
      <FormLabel>Prénom</FormLabel>
      <Input type="text"/> 
</FormControl>
< FormControl>
      <FormLabel>Nom</FormLabel>
      <Input type="text"/> 
</FormControl>
< FormControl>
      <FormLabel>Adresse email</FormLabel>
      <Input type="email"/> 
</FormControl>
< FormControl>
      <FormLabel>Objet du message</FormLabel>
      <Input type="text"/> 
</FormControl>
< FormControl>
      <FormLabel>Message</FormLabel>
      <Textarea/>
</FormControl>
< FormControl mt={3}>
      <Input bg="whatsapp.500" type="submit" value="Envoyer"/>
</FormControl>
</Container>
  </>
}

export default Contacts
