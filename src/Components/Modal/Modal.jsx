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
  Card,
  CardBody,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, QuestionIcon } from '@chakra-ui/icons';
import Steppers from './Stepper';
import Texts from './Forms/FormsFirst';
import Tabs from './ModalTable';
import { HiOutlineViewColumns } from 'react-icons/hi2';
import FormsThird from './Forms/FormsThird';

const steps = [
  { title: 'Quiz Info' },
  { title: 'Questions' },
  { title: 'Settings' },
];

function Modals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [addedQuestion, setAddedQuestion] = useState(false);
  const [formData, setFormData] = useState({
    quizInfo: {},
    questions: [],
    settings: {}
  });

  const handleNext = () => {
    if (currentStep === 0) {
     
      const quizInfoForm = document.querySelector('form');
      if (quizInfoForm) {
        const formDataObj = new FormData(quizInfoForm);
        const quizInfo = {
          quizTitle: formDataObj.get('quizTitle') || '',
          description: formDataObj.get('description') || ''
        };
        setFormData(prev => ({ ...prev, quizInfo }));
        console.log('Quiz Info saved:', quizInfo);
      }
      showStepCompletionToast('Quiz Info saved successfully!');
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 1) {
      if (!addedQuestion) {
        showAddQuestionToast();
        return;
      } else {
        
        showStepCompletionToast('Questions saved successfully!');
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      
      const settingsForm = document.querySelector('form');
      if (settingsForm) {
        settingsForm.requestSubmit(); 
      }

      
      setTimeout(() => {
       
        console.log('Quiz Info:', formData.quizInfo);
        console.log('Questions:', formData.questions);
        console.log('Settings:', formData.settings);
       
        
        onClose();
        resetModal();
      }, 100);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetModal = () => {
    setCurrentStep(0);
    setAddedQuestion(false);
    setFormData({
      quizInfo: {},
      questions: [],
      settings: {}
    });
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  const handleAddQuestion = () => {
    setAddedQuestion(true);
  };

  
  const handleQuestionsSubmit = (questionData) => {
    setFormData(prev => ({
      ...prev,
      questions: [...prev.questions, questionData]
    }));
   
  };

  
  const handleSettingsSubmit = (settingsData) => {
    setFormData(prev => ({
      ...prev,
      settings: settingsData 
    }));
    
  };

  const showAddQuestionToast = () => {
    toast({
      title: "Add Question Required",
      description: "Please add at least one question before proceeding",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
  };

  const showStepCompletionToast = (message) => {
    toast({
      title: "Title Saved",
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ModalBody padding={5}>
            <Card>
              <CardBody>
                <Texts />
              </CardBody>
            </Card>
          </ModalBody>
        );
      case 1:
        if (!addedQuestion) {
          return (
            <ModalBody>
              <Card>
                <CardBody backgroundColor={'whiteAlpha.900'} >
                <Stack gap={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'} padding={2}>
                  <Box padding={5} rounded={'full'} background={'white'}>
                  <QuestionIcon color={'wheat'} w={20} h={20} />
                </Box>
                <Heading>Add Your Questions Here</Heading>
                <Text>You haven't added any question yet. <br /> Start by adding one!</Text>
                <Button 
                  gap={2} 
                  onClick={handleAddQuestion}
                  backgroundColor='#7b68ee' 
                  color={'white'}
                >
                  <Text>Add Questions</Text> 
                  <AddIcon/>
                </Button>
                </Stack>
              </CardBody>
              </Card>
            </ModalBody>
          );
        } else {
          return (
            <ModalBody padding={5}>
              <Tabs onFormSubmit={handleQuestionsSubmit} />
            </ModalBody>
          );
        }
      case 2:
        return (
          <ModalBody padding={5}>
           <Card>
            <CardBody>
               <FormsThird onFormSubmit={handleSettingsSubmit}/>
            </CardBody>
           </Card>
          </ModalBody>
        );
      default:
        return null;
    }
  };

  const renderFooterButtons = () => {
    const getNextButtonText = () => {
      if (currentStep === steps.length - 1) {
        return 'Finish';
      } else {
        return 'Save & Continue';
      }
    };

    return (
      <>
        <Button 
          onClick={handleBack} 
        >
          {currentStep === 0 ? '' : 'Back'}
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
            {getNextButtonText()}
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
              <Text><HiOutlineViewColumns size={20} /></Text>
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