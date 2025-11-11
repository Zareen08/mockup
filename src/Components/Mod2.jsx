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
import Mod22 from './Mod22';


const step = [
  { title: 'Quiz Info' },
  { title:  'Questions' },
  { title:  'Settings' },
]

function Mod2() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const { activeStep } = useSteps({
      index: 1,
      count: step.length,
      
    })

  return (
    <>
      <Button onClick={onOpen} color={'white'} backgroundColor={'#7b68ee'}> Save & Continue</Button>
      

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
          <Box padding={4}>
            <Steppers steps={step} activeStep={activeStep}></Steppers>
          </Box>
          <ModalBody >
            
              <VStack  backgroundColor={'whiteAlpha.900'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
              <Box padding={5} rounded={'full'} background={'white'} >
                <QuestionIcon color={'wheat'} w={20} h={20}/>
              </Box>
              <Heading>Add Your Questions Here</Heading>
              <Text>You haven't added any question yet. <br /> Start by adding one!</Text>
              <Mod22></Mod22>
            </VStack>
            
          </ModalBody>
          <Divider/>
          <ModalFooter justifyContent={'space-between'}>
             <Button onClick={() => navigate((-1))}>Back</Button>
            <Box >
                <Button onClick={onClose} mr={3}>Cancel</Button>
                <Button  color={'white'} backgroundColor={'#7b68ee'}> Save & Continue</Button>
            </Box>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Mod2;