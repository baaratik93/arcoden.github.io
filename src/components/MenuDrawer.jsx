import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import {Search2Icon} from "@chakra-ui/icons"

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button color={useColorModeValue('gray.200', 'gold')} colorScheme='transparent' onClick={onOpen}><Search2Icon/></Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement='top'>
        <DrawerOverlay />
        <DrawerContent bg='blue.400'>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input name='nickname' placeholder='Type here...' />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer