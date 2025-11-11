import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Flex, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React from 'react';
import Tab from './Table';
import Modals from './Modal';
import Mo from './Mo';

const buts=['All', 'Publish', 'Draft', 'Pending', 'Trash']

const Quizzes = () => {
    return (
        <>
        <Box width={'92rem'} padding={'1rem'} backgroundColor={'white'}>
        <Flex justifyContent={'space-between'}>
           <Heading> All Quizzes</Heading>
           <Mo></Mo>
        </Flex>

        <Box padding={'2rem'}>
            <Flex gap={'1rem'}>
              
                {buts.map(but=>(<Text>{but}</Text>))}
             
              <InputGroup >
              <InputLeftElement><SearchIcon color='gray.300' /></InputLeftElement>
              <Input type='search' placeholder='Search Quiz' />
              </InputGroup>
               <Center height='3rem'>
               <Divider orientation='vertical'/>
               </Center>
               <Button width={'7rem'} px={'3rem'}> <SettingsIcon/> Columns</Button>

            </Flex>
             
              <Divider />

              <Tab></Tab>

  

           
        </Box>
        </Box>   
        </>
    );
};

export default Quizzes;