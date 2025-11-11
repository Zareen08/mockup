import React from 'react';
import Steppers from './Stepper';
import { Box, useSteps } from '@chakra-ui/react';




const step = [
  { title: 'Quiz Info' },
  { title:  'Questions' },
  { title:  'Settings' },
]


const Step1 = () => {
const { activeStep } = useSteps({
    index: 0,
    count: step.length,
    
  })
    
    return (
        <Box padding={4}>
            <Steppers steps={step} activeStep={activeStep}></Steppers>
        </Box>
    );
};

export default Step1;