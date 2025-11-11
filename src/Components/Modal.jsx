import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  HStack,
  Text,
  CloseButton,
  Divider,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import Step1 from './Step1';
import Texts from './Text';
import Mod2 from './Mod2';



function Modals() {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  const initialRef = React.useRef(null)
  

  

  return (
    <>
      <Button onClick={onOpen} color={'white'} backgroundColor={'#7b68ee'}>Add New Quiz</Button>
      

      <Modal size={'6xl'}
        initialFocusRef={initialRef}
       
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          
          <HStack justifyContent={'space-between'}>
         <ModalHeader>
          <Text>Quiz</Text>
          </ModalHeader>
          
            <Flex alignItems={'center'} gap={1} justifyContent={'center'} width={'10%'} height={'10%'} textAlign={'center'}>
              <SettingsIcon />
              <CloseButton onClick={onClose}/></Flex>
          
          </HStack>
          <Step1 ></Step1>
          <ModalBody padding={5}  >
            <Texts ></Texts>
          </ModalBody>
          <Divider/>
          <ModalFooter gap={1}>
            <Button onClick={onClose}>Cancel</Button>
            <Mod2 ></Mod2>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modals;