import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  useColorModeValue,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react'
import {Search2Icon} from "@chakra-ui/icons"

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button color={useColorModeValue('gray.200', 'gold')} colorScheme='transparent' onClick={onOpen}><Search2Icon/></Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt='100'>
          <ModalHeader>Rechercher</ModalHeader>
          <ModalCloseButton/>
          <ModalBody p={3}>
          <Input type='text' w='full'/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MenuDrawer