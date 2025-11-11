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
  useSteps,
  Box,
  VStack,
  Heading,
  
} from '@chakra-ui/react';
import { AddIcon, QuestionIcon, SettingsIcon } from '@chakra-ui/icons';
import Steppers from './Stepper';
import { useNavigate } from 'react-router';
import Forms from './Forms';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';


const step = [
  { title: 'Quiz Info' },
  { title:  'Questions' },
  { title:  'Settings' },
]

function Mod22() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const { activeStep } = useSteps({
      index: 1,
      count: step.length,
      
    })

  return (
    <>
      <Button gap={2} onClick={onOpen} backgroundColor='#7b68ee' color={'white'}><Text>Add Questions</Text> <AddIcon/></Button>
      

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
          <Box padding={2}>
            <Steppers steps={step} activeStep={activeStep}></Steppers>
          </Box>
          <ModalBody padding={5}>

            
            <HStack justifyContent={'space-between'} gap={5} padding={4} >   
              
                <VStack width={'50%'} height={'500px'}>
                  <Tabs></Tabs>
                </VStack>
            

            
               <VStack width={'50%'} height={'500px'}>
                 <Tabs2 ></Tabs2>
               </VStack>
           
            </HStack>
            
          </ModalBody>
          <Divider/>
          <ModalFooter justifyContent={'space-between'}>
             <Button onClick={() => navigate((-1))}>Back</Button>
            <Box >
                <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button backgroundColor='#7b68ee'  color={'white'} type="submit">
              Save & Continue
            </Button>
            </Box>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Mod22;