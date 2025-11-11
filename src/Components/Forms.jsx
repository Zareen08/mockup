import React from 'react';
import { useFormik } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Divider, Flex, FormControl, FormLabel, Image, Input, Radio, RadioGroup, Stack, Switch, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react';
import Select from 'react-select';

const Forms = () => {
    const { isOpen, onToggle } = useDisclosure();
    
    const questionTypeOptions = [
        { value: 'true-false', label: 'True/False' },
        { value: 'single-answer', label: 'Single Answer' },
        { value: 'multiple-choice', label: 'Multiple Choice' },
        { value: 'short-answer', label: 'Short Answer' },
        { value: 'image-answer', label: 'Image Answer' },
        { value: 'fill-blank', label: 'Fill in the Blank' }
    ];
    
    const formik = useFormik({
        initialValues: {
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
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            
        },
    });

    return (
        <>
        <Box overflow={'scroll'} height={'400px'} as="form" onSubmit={formik.handleSubmit}>
           
            <FormControl>
                <FormLabel>Quiz Title</FormLabel>
                <Input 
                    name="quizTitle"
                    placeholder='Quiz Title' 
                    value={formik.values.quizTitle}
                    onChange={formik.handleChange}
                />
            </FormControl>
            
            
            <FormControl mt={4}>
                <FormLabel display={'flex'} alignItems={'center'} gap={1}>
                    <Text onClick={onToggle} gap={2} cursor="pointer">
                        <AddIcon/>Description
                    </Text>
                </FormLabel>
                <Collapse in={isOpen} animateOpacity>
                    <Textarea 
                        name="description"
                        width={'full'} 
                        placeholder='Add Description'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    /> 
                </Collapse>
            </FormControl>

            
            <Flex gap={12}>
                <FormControl>
                    <FormLabel>Question Types</FormLabel>
                    <Select
                        options={questionTypeOptions}
                        value={formik.values.questionType}
                        onChange={(selectedOption) => 
                            formik.setFieldValue('questionType', selectedOption)
                        }
                        placeholder="Select question type..."
                        
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Points</FormLabel>
                    <Input 
                        name="points"
                        placeholder='0' 
                        value={formik.values.points}
                        onChange={formik.handleChange}
                        type="number"
                    />
                </FormControl>
            </Flex>

            <Text mt={4}>
                Select or add an option for this question, then select the correct answer.
            </Text>
            
            <Divider/>

            
            <FormControl>
                <FormLabel>Answer Title</FormLabel>
                <Input 
                    name="answerTitle"
                    placeholder='Answer Title' 
                    value={formik.values.answerTitle}
                    onChange={formik.handleChange}
                />
            </FormControl>

            
            <FormControl>
                <Flex justifyContent={'space-between'} alignItems={'center'} border={'md'} borderColor={'grey'} p={4}>
                    <Box>
                        <Image src='/vite.svg' alt="Preview"/>
                    </Box>
                    <Box>
                        <FormLabel htmlFor="custom-file-upload">Upload Image</FormLabel>
                        <Text>File Support: .jpg, .jpeg, .gif, .png.</Text>
                        <Text>Recommended Size: 700x430 pixels.</Text>
                        <Input 
                            id="custom-file-upload" 
                            type='file'
                            name="image"
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                            }}
                        />
                    </Box>
                </Flex>
            </FormControl>

           
            <FormControl>
                <FormLabel>Display format for answer options</FormLabel>
                <RadioGroup 
                    name="displayFormat"
                    value={formik.values.displayFormat}
                    onChange={(value) => formik.setFieldValue('displayFormat', value)}
                >
                    <Stack direction='row'>
                        <Radio value='1'>Only Text</Radio>
                        <Radio value='2'>Only Image</Radio>
                        <Radio value='3'>Text & Image Both</Radio>
                    </Stack>
                </RadioGroup>
                <Button mt={2} type="submit" >
                    Save & Update Answer
                </Button>
            </FormControl>

            <Divider/>

           
            <FormControl>
                <Text>Question Settings</Text>
            </FormControl>
            
            <Divider/>

            
            <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                <FormLabel htmlFor='answer-required' mb='0'>
                    Answer Required
                </FormLabel>
                <Switch 
                    id='answer-required'
                    name="answerRequired"
                    isChecked={formik.values.answerRequired}
                    onChange={formik.handleChange}
                />
            </FormControl>

            <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                <FormLabel htmlFor='randomize-answer' mb='0'>
                    Randomize Answer 
                </FormLabel>
                <Switch 
                    id='randomize-answer'
                    name="randomizeAnswer"
                    isChecked={formik.values.randomizeAnswer}
                    onChange={formik.handleChange}
                />
            </FormControl>

            <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                <FormLabel htmlFor='display-points' mb='0'>
                    Display Points
                </FormLabel>
                <Switch 
                    id='display-points'
                    name="displayPoints"
                    isChecked={formik.values.displayPoints}
                    onChange={formik.handleChange}
                />
            </FormControl>
              
              
            
            
        </Box>

        </>
    );
};

export default Forms;