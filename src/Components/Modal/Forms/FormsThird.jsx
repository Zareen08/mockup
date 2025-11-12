import { Box, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputRightAddon, Radio, RadioGroup, Stack, Switch, Text } from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import React from 'react';
import Select from 'react-select';

const FormsThird = ({ onFormSubmit }) => {
    const questionTimeOptions = [
        { value: 'seconds', label: 'Seconds' },
        { value: 'minutes', label: 'Minutes' },
        { value: 'hours', label: 'Hours' },
        { value: 'days', label: 'Days' },
        { value: 'weeks', label: 'Weeks' },
    ];
    
    const questionOrder = [
        { value: 'random', label: 'Random' },
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' },
    ];

    return (
        <Formik
            enableReinitialize
            initialValues={{
                hideQuestionNumber: false,
                hideQuizTime: false,
                timeLimit: '0',
                timeUnit: null,
                questionOrder: null,
                passingGrade: '',
                quizFeedbackMode: '2',
                maxQuestionsAllowed: '0'
            }}
            onSubmit={(values) => {
                console.log('FormsThird submitted:', values);
                if (onFormSubmit) {
                    onFormSubmit(values);
                }
            }}
        >
            {({ handleSubmit, setFieldValue, values }) => (
                <Stack as="form" onSubmit={handleSubmit} padding={5} spacing={3}>
                    <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                        <FormLabel htmlFor='hide-number' mb='0' width={'60%'}>
                            <Text fontWeight={'semibold'}>Hide Question Number</Text>
                            <Text>Show/hide question number during attempt</Text>
                        </FormLabel>
                        <Field 
                            as={Switch}
                            id='hide-number'
                            name="hideQuestionNumber"
                        />
                    </FormControl>

                    <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                        <FormLabel htmlFor='hide-time' mb='0' width={'60%'}>
                            <Text fontWeight={'semibold'}>Hide quiz time</Text>
                            <Text>Show/hide quiz time</Text>
                        </FormLabel>
                        <Field 
                            as={Switch}
                            id='hide-time'
                            name="hideQuizTime"
                        />
                    </FormControl>

                    <Divider/>

                    <Flex alignItems='center' justifyContent={'space-between'}>
                        <FormLabel width={'60%'}>
                            <Text fontWeight={'semibold'}>Time Limit</Text>
                            <Text>Time limit for this quiz, 0 means no time limit</Text>
                        </FormLabel>

                        <FormControl display='flex' alignItems='center' justifyContent={'end'} gap={2}>
                            <Field 
                                as={Input}
                                name="timeLimit"
                                placeholder='0'
                                type="number"
                                width={'100px'}
                            />
                            <Box width={'150px'}>
                                <Select
                                    options={questionTimeOptions}
                                    value={questionTimeOptions.find(option => option.value === values.timeUnit?.value) || null}
                                    onChange={(selectedOption) => setFieldValue('timeUnit', selectedOption)}
                                    placeholder="Minutes"
                                />
                            </Box>
                        </FormControl>
                    </Flex>

                    <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                        <FormLabel width={'60%'}>
                            <Text fontWeight={'semibold'}>Question Order</Text>
                            <Text>Question order type</Text>
                        </FormLabel>
                        <Box width={'30%'}>
                            <Select
                                options={questionOrder}
                                value={questionOrder.find(option => option.value === values.questionOrder?.value) || null}
                                onChange={(selectedOption) => setFieldValue('questionOrder', selectedOption)}
                                placeholder="Random"
                            />
                        </Box>
                    </FormControl>

                    <Divider/>
                    
                    <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                        <FormLabel width={'60%'}>
                            <Text fontWeight={'semibold'}>Passing Grade (%)</Text>
                            <Text>Set the passing percentage for the quiz</Text>
                        </FormLabel>
                        <InputGroup width={'30%'}>
                            <Field 
                                as={Input}
                                name="passingGrade"
                                placeholder='0'
                                type="number"
                            />
                            <InputRightAddon>%</InputRightAddon>
                        </InputGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel width={'60%'}>
                            <Text fontWeight={'semibold'}>Quiz Feedback Mode</Text>
                            <Text>(Pick the quiz systems behaviour on choice based questions.)</Text>
                        </FormLabel>
                        <Box>
                            <Field
                                as={RadioGroup}
                                name="quizFeedbackMode"
                            >
                                <Stack spacing={5} direction='row'>
                                    <Box border={'2px'} rounded={'2xl'} width={'50%'} borderColor={'#7b68ee'}>
                                        <Field 
                                            as={Radio}
                                            value='1'
                                        >
                                            <Box padding={3} gap={2}>
                                                <Text fontWeight={'semibold'}>Default</Text>
                                                <Text color={'#7b68ee'}>Answers are shown after the quiz is finished</Text>
                                            </Box>
                                        </Field>
                                    </Box>
                                    <Box border={'2px'} rounded={'2xl'} width={'50%'} borderColor={'#7b68ee'}>
                                        <Field 
                                            as={Radio}
                                            value='2'
                                        >
                                            <Box padding={3} gap={2}>
                                                <Text fontWeight={'semibold'}>Retry Mode</Text>
                                                <Text color={'#7b68ee'}>Unlimited attempts on each question</Text>
                                            </Box>
                                        </Field>
                                    </Box>
                                </Stack>
                            </Field>
                        </Box>
                    </FormControl>

                    <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                        <FormLabel width={'80%'}>
                            <Text fontWeight={'semibold'}>Max question allowed</Text>
                            <Text>Specify the number of questions you would like to display on the learning page, 0 for no limit</Text>
                        </FormLabel>
                        <Field 
                            as={Input}
                            name="maxQuestionsAllowed"
                            width={'20%'}
                            placeholder="0"
                            type="number"
                        />
                    </FormControl>
                </Stack>
            )}
        </Formik>
    );
};

export default FormsThird;