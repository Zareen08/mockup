import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';

const MainLayout = () => {
    return (
        <Box minH="100vh" bg="gray.50"> 
            <Header/>
            <Box backgroundColor="whiteAlpha.900"> 
                <Outlet/>
            </Box>
        </Box>
    );
};

export default MainLayout;