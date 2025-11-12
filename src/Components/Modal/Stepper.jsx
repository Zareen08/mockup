import React from 'react';
import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react'

const Steppers = ({ activeStep, steps = [] }) => {
  return (
    <Stepper index={activeStep} colorScheme='purple'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Steppers;