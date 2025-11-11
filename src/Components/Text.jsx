import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, FormControl, FormLabel, Input, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';

const Texts = () => {
    const { isOpen, onToggle } = useDisclosure();
    const initialRef = React.useRef(null);

    const formik = useFormik({
        initialValues: {
            quizTitle: '',
            description: '',
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <Box as="form" onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>Quiz Title</FormLabel>
                <Input 
                    ref={initialRef}
                    name="quizTitle" 
                    placeholder='Quiz Title' 
                    value={formik.values.quizTitle}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                        onBlur={formik.handleBlur}
                    /> 
                </Collapse>
            </FormControl>
            
        </Box>
    );
};

export default Texts;