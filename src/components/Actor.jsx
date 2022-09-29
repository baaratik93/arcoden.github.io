import { VStack,Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import ActorModal from './ActorModal'
import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import { FiInstagram,FiFacebook,FiTwitter } from 'react-icons/fi'

const Actor = (props) => {
  const {onOpen,onClose,isOpen} = useDisclosure()
  // const [open, setOpen] = useState()
  // function Handler(e) {
  //   e.preventDefault();
  //  setOpen(true)
  // }
  return  <> <VStack onClick={onOpen} cursor="poingter" boxShadow="sm" h="220px"  _hover={{bg:"green.100", rounded:"3xl"}} p={3} my={3}  >
      <Image src={props.image} w="120px" h="120"  rounded="2xl"/>
      <Text fontSize={18} fontWeight="bold">{props.name}</Text>
      <Text as="small" fontWeight="bold"  color="green.300" >{props.title}</Text>
  </VStack>
  <Modal  isOpen={isOpen} onClose={onClose} size="3xl" >
      <ModalOverlay>
          <ModalContent>
              <ModalHeader> {props.name} <small><Text> {props.title} </Text></small></ModalHeader>
              <ModalCloseButton/>
              <ModalBody display="flex" justifyContent="space-around">
                  <Flex flexDirection={['column','row','row']}>
                    <Image borderRadius={16}  src={props.image}/>
                  <Box>
                  <Text p={5}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum autem perferendis velit
                    commodcolumni vero aliquam odit temporibus corporis alias.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum autem perferendis velit commodi
                    vero aliquam odit temporibr
                  </Text>
                  </Box>
                  </Flex>
              </ModalBody>
              <ModalFooter>
              <FiInstagram color="grey" size={32} style={{
                marginLeft: "20px"
              }}/><FiFacebook color="blue" size={32} style={{
                marginLeft: "20px"
              }}/><FiTwitter color="skyblue" size={32}  style={{
                marginLeft: "20px"
              }}  />
              </ModalFooter>
          </ModalContent>
      </ModalOverlay>
  </Modal>
  </>
}

export default Actor;
