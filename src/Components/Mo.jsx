import React, { useState } from 'react';
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
  Box,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { AddIcon, QuestionIcon, SettingsIcon } from '@chakra-ui/icons';
import Steppers from './Stepper';
import Texts from './Text';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';

const steps = [
  { title: 'Quiz Info' },
  { title: 'Questions' },
  { title: 'Settings' },
];

function Modals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
      resetModal();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetModal = () => {
    setCurrentStep(0);
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  const questionsStep = () => {
    setCurrentStep(2);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <ModalBody padding={5}>
              <Texts />
            </ModalBody>
          </>
        );
      case 1:
        return (
          <ModalBody>
            <VStack backgroundColor={'whiteAlpha.900'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
              <Box padding={5} rounded={'full'} background={'white'}>
                <QuestionIcon color={'wheat'} w={20} h={20} />
              </Box>
              <Heading>Add Your Questions Here</Heading>
              <Text>You haven't added any question yet. <br /> Start by adding one!</Text>
              <Button 
                gap={2} 
                onClick={questionsStep}
                backgroundColor='#7b68ee' 
                color={'white'}
              >
                <Text>Add Questions</Text> 
                <AddIcon/>
              </Button>
            </VStack>
          </ModalBody>
        );
      case 2:
        return (
          <ModalBody padding={5}>
            <HStack justifyContent={'space-between'} gap={5} padding={4}>   
              <VStack width={'50%'} height={'500px'}>
                <Tabs />
              </VStack>
              <VStack width={'50%'} height={'500px'}>
                <Tabs2 />
              </VStack>
            </HStack>
          </ModalBody>
        );
      default:
        return null;
    }
  };

  const renderFooterButtons = () => {
    return (
      <>
        <Button 
          onClick={handleBack} 
          
        >
          {currentStep === steps.length - 3 ? '' : 'Back'}
        </Button>
        <Box>
          <Button onClick={handleClose} mr={3}>
           Cancel
          </Button>
          <Button 
            color={'white'} 
            backgroundColor={'#7b68ee'} 
            onClick={handleNext}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Save & Continue'}
          </Button>
        </Box>
      </>
    );
  };

  return (
    <>
      <Button onClick={onOpen} color={'white'} backgroundColor={'#7b68ee'}>
        Add New Quiz
      </Button>

      <Modal 
        size={'6xl'}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <HStack justifyContent={'space-between'}>
            <ModalHeader>
              <Text>Quiz</Text>
            </ModalHeader>
            <Flex alignItems={'center'} gap={1} justifyContent={'center'} width={'10%'} height={'10%'} textAlign={'center'}>
              <SettingsIcon />
              <CloseButton onClick={handleClose}/>
            </Flex>
          </HStack>
          
         
          <Box padding={5}>
            <Steppers 
              steps={steps} 
              activeStep={currentStep} 
            />
          </Box>

          {renderStepContent()}
          
          <Divider/>
          <ModalFooter justifyContent={'space-between'}>
            {renderFooterButtons()}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;