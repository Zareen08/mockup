import { ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
    return (
        <HStack padding={'2rem'}>
            <Image src='/vite.svg' alt='LOGO'/>
            <ChevronRightIcon/>
            <Text>All Quizzes</Text>
        </HStack>
    );
};

export default Header;