import React from 'react';
import { Formik, Field } from 'formik';
import { AddIcon, QuestionIcon } from '@chakra-ui/icons';
import {
  Button,
  Box,
  Text,
  Flex,
  HStack,
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Divider,
  ButtonGroup,
  Collapse,
  FormControl,
  FormLabel,
  Image,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
  Switch,
} from '@chakra-ui/react';
import Select from 'react-select';

const Tabs = ({ onFormSubmit }) => {
    const { isOpen, onToggle } = useDisclosure();
    
    const questionTypeOptions = [
        { value: 'true-false', label: 'True/False' },
        { value: 'single-answer', label: 'Single Answer' },
        { value: 'multiple-choice', label: 'Multiple Choice' },
        { value: 'short-answer', label: 'Short Answer' },
        { value: 'image-answer', label: 'Image Answer' },
        { value: 'fill-blank', label: 'Fill in the Blank' }
    ];

    const handleAddQuestion = (values, { resetForm }) => {
        console.log('Question added:', values);
        if (onFormSubmit) {
            onFormSubmit(values);
        }
        
        resetForm();
    };

    const handleReset = (resetForm) => {
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                quizTitle: '',
                description: '',
                questionType: '',
                points: '0',
                answerTitle: '',
                displayFormat: '1',
                image: null,
                answerRequired: false,
                randomizeAnswer: false,
                displayPoints: false
            }}
            onSubmit={handleAddQuestion}
        >
            {({ handleSubmit, resetForm }) => (
                <HStack justifyContent={'center'} alignItems={'center'} spacing={4}>
                    <Card height={'580px'} width={'40%'}>
                        <CardHeader height={"60px"}>
                            <Heading size='md'>Question Preview</Heading>
                        </CardHeader>
                        <Divider/>
                        <CardBody justifyContent={'center'} alignItems={'center'} textAlign={'center'} height={'500px'} padding={2}>
                            <Stack spacing='4' paddingTop={20}>
                                <Box padding={5} rounded={'full'} background={'white'} >
                                    <QuestionIcon color={'wheat'} w={20} h={20}/>
                                </Box>
                                <Text fontWeight={'semibold'}>Add Your Questions Here</Text>
                                <Text>You haven't added any question yet. <br /> Start by adding one!</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card height={'580px'} width={'60%'}>
                        <CardHeader height={"60px"}>
                            <Heading size='md'>Add New Question</Heading>
                        </CardHeader>
                        <Divider/>
                        <CardBody height={'500px'} padding={2}>
                            <Stack as="form" onSubmit={handleSubmit} spacing='4' height="100%">
                                <Box flex="1" overflowY="auto">
                                    <Stack gap={5} overflow={'scroll'} height={'400px'}>
                                        <FormControl>
                                            <FormLabel fontWeight={'semibold'}>Quiz Title</FormLabel>
                                            <Field 
                                                as={Input}
                                                name="quizTitle"
                                                placeholder='Quiz Title'
                                            />
                                        </FormControl>
                                        
                                        <FormControl mt={4}>
                                            <FormLabel display={'flex'}>
                                                <Flex onClick={onToggle} gap={2} cursor="pointer" alignItems={'center'}>
                                                    <AddIcon/>
                                                    <Text fontWeight={'semibold'}>Description</Text>
                                                </Flex>
                                            </FormLabel>
                                            <Collapse in={isOpen} animateOpacity>
                                                <Field 
                                                    as={Textarea}
                                                    name="description"
                                                    width={'full'} 
                                                    placeholder='Add Description'
                                                />
                                            </Collapse>
                                        </FormControl>

                                        <Flex gap={12}>
                                            <FormControl>
                                                <FormLabel fontWeight={'semibold'}>Question Types</FormLabel>
                                                <Field
                                                    as={Select}
                                                    name="questionType"
                                                    options={questionTypeOptions}
                                                    placeholder="Select question type..."
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel fontWeight={'semibold'}>Points</FormLabel>
                                                <Field 
                                                    as={Input}
                                                    name="points"
                                                    placeholder='0'
                                                    type="number"
                                                />
                                            </FormControl>
                                        </Flex>

                                        <Text mt={4}>
                                            Select or add an option for this question, then select the correct answer.
                                        </Text>
                                        
                                        <Divider/>

                                        <FormControl>
                                            <FormLabel fontWeight={'semibold'}>Answer Title</FormLabel>
                                            <Field 
                                                as={Input}
                                                name="answerTitle"
                                                placeholder='Answer Title'
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} border={'md'} borderColor={'grey'} p={4}>
                                                <Box>
                                                    <Image src='/vite.svg' alt="Preview"/>
                                                </Box>
                                                <Box>
                                                    <FormLabel htmlFor="custom-file-upload" fontWeight={'semibold'}>Upload Image</FormLabel>
                                                    <Text>File Support: .jpg, .jpeg, .gif, .png.</Text>
                                                    <Text>Recommended Size: 700x430 pixels.</Text>
                                                    <Field 
                                                        as={Input}
                                                        id="custom-file-upload"
                                                        variant={'unstyled'}
                                                        type='file'
                                                        name="image"
                                                    />
                                                </Box>
                                            </Flex>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel fontWeight={'semibold'}>Display format for answer options</FormLabel>
                                            <Field
                                                as={RadioGroup}
                                                name="displayFormat"
                                            >
                                                <Stack direction='row'>
                                                    <Field 
                                                        as={Radio}
                                                        value='1'
                                                    >
                                                        Only Text
                                                    </Field>
                                                    <Field 
                                                        as={Radio}
                                                        value='2'
                                                    >
                                                        Only Image
                                                    </Field>
                                                    <Field 
                                                        as={Radio}
                                                        value='3'
                                                    >
                                                        Text & Image Both
                                                    </Field>
                                                </Stack>
                                            </Field>
                                        </FormControl>

                                        <Divider/>

                                        <FormControl>
                                            <Text fontWeight={'semibold'}>Question Settings</Text>
                                        </FormControl>
                                        
                                        <Divider/>

                                        <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                                            <FormLabel htmlFor='answer-required' mb='0'>
                                                Answer Required
                                            </FormLabel>
                                            <Field 
                                                as={Switch}
                                                id='answer-required'
                                                name="answerRequired"
                                            />
                                        </FormControl>

                                        <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                                            <FormLabel htmlFor='randomize-answer' mb='0'>
                                                Randomize Answer 
                                            </FormLabel>
                                            <Field 
                                                as={Switch}
                                                id='randomize-answer'
                                                name="randomizeAnswer"
                                            />
                                        </FormControl>

                                        <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                                            <FormLabel htmlFor='display-points' mb='0'>
                                                Display Points
                                            </FormLabel>
                                            <Field 
                                                as={Switch}
                                                id='display-points'
                                                name="displayPoints"
                                            />
                                        </FormControl>
                                    </Stack>
                                </Box>
                                <Divider/>
                                <ButtonGroup spacing='2' justifyContent={'end'} as={Flex}>
                                    <Button 
                                        type="button" 
                                        onClick={() => handleReset(resetForm)}
                                        variant="outline"
                                    >
                                        Reset
                                    </Button>
                                    <Button 
                                        type="submit"
                                        backgroundColor={'#7b68ee'}
                                        color={'white'}
                                    >
                                        Add Question
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                        </CardBody>
                    </Card>
                </HStack>
            )}
        </Formik>
    );
};

export default Tabs;