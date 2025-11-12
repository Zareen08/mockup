import { HStack, Image, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const Header = () => {
    return (
        <HStack py={2} alignItems={'center'} spacing={2}>
            <Image 
                src='/LMSLOgo.png' 
                alt='LMS Logo'
                height="40px"
                objectFit="contain"
            />
            <Box color="gray.500">
                <SlArrowRight size={16} />
            </Box>
            <Text fontSize="lg" fontWeight="medium" color="gray.700">
                All Quizzes
            </Text>
        </HStack>
    );
};

export default Header;