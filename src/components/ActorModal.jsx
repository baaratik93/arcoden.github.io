import React, {useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

const ActorModal = ({name,title,open}) => {
    const {isOpen, onOpen,onClose,} = useDisclosure()
   const [active , setActive] = useState()
   useEffect(()=>{
       setActive(open)
   },[])
  return <Modal >
      <ModalOverlay>
          <ModalContent>
              <ModalHeader> {name} </ModalHeader>
              <ModalCloseButton/>
              <ModalBody>
                {title}
              </ModalBody>
          </ModalContent>
      </ModalOverlay>
  </Modal>
}

export default ActorModal