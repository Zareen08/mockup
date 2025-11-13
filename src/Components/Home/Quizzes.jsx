import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Tab from './Table';
import Modal from '../Modal/Modal';
import { HiOutlineViewColumns } from 'react-icons/hi2';


const buts=['All', 'Publish', 'Draft', 'Pending', 'Trash']

const Quizzes = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    return (
        <>
        <Box width={'92rem'} padding={'2rem'} backgroundColor={'white'} gap={5}>
        <Flex justifyContent={'space-between'} padding={'2rem'}>
           <Text fontWeight={'bold'} fontSize={'3xl'}> All Quizzes</Text>
           <Modal></Modal>
        </Flex>

        

        <Stack gap={5} padding={'1rem'} >
            <Flex  justifyContent={'space-between'} alignItems={'center'}>
              
                <Flex gap={'1rem'}>
                    {buts.map(but=>(
                    <Text 
                                key={but}
                                position="relative"
                                cursor="pointer"
                                fontWeight={activeFilter === but ? 'bold' : 'normal'}
                                color={activeFilter === but ? '#7b68ee' : 'gray.600'}
                                py={2}
                                px={1}
                                transition="all 0.2s"
                                _hover={{
                                    color: '#7b68ee',
                                    _after: {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: '#7b68ee',
                                        transition: 'all 0.2s'
                                    }
                                }}
                                
                                onClick={() => setActiveFilter(but)}
                            >
                                {but}
                            </Text>
                ))}
                </Flex>
                
              <Flex>
                <InputGroup >
              <InputLeftElement><SearchIcon color='gray.300' /></InputLeftElement>
              <Input type='search' placeholder='Search Quiz' width={'300px'} />
              </InputGroup>
               <Center height='3rem'>
               <Divider orientation='vertical'/>
               </Center>
               <Button width={'7rem'} px={'3rem'} gap={1} alignItems={'center'} variant={'outline'}
                _hover={{
                                    backgroundColor: '#7b68ee',
                                    color:'white'
                                    
                                }}
               > <Text> <HiOutlineViewColumns size={20} /> </Text> Columns</Button>
              </Flex>

            </Flex>
             
              <Divider />

              <Tab></Tab>

  

           
        </Stack>
        </Box>   
        </>
    );
};

export default Quizzes;