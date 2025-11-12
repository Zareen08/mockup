import { AddIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, FormControl, FormLabel, Input, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import React from 'react';

const Texts = ({ onFormSubmit }) => {
    const { isOpen, onToggle } = useDisclosure();
    const initialRef = React.useRef(null);

    return (
        <Formik
            enableReinitialize
            initialValues={{
                quizTitle: '',
                description: '',
            }}
            onSubmit={(values) => {
               
                if (onFormSubmit) {
                    onFormSubmit(values);
                }
            }}
        >
            {({ handleSubmit }) => (
                <Box as="form" onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel fontWeight={'semibold'}>Quiz Title</FormLabel>
                        <Field 
                            as={Input}
                            innerRef={initialRef}
                            name="quizTitle" 
                            placeholder='Quiz Title' 
                        />
                    </FormControl>
                    
                    <FormControl mt={4}>
                        <FormLabel display={'flex'} alignItems={'center'} gap={1}>
                            <Flex onClick={onToggle} gap={2} cursor="pointer" alignItems={'center'}>
                                <AddIcon/><Text fontWeight={'semibold'}>Description</Text>
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
                </Box>
            )}
        </Formik>
    );
};

export default Texts;