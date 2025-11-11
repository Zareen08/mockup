import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons';
const Tabs = () => {
    return (
        <>
         <TableContainer>
  <Table size='md'>
    <Thead>
      <Tr>
        <Th textAlign={'center'}>Question List</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td textAlign={'center'} justifyContent={'center'} alignItems={'center'}  height={'480px'}>
            <Box padding={5} rounded={'full'} background={'white'} >
                            <QuestionIcon color={'wheat'} w={20} h={20}/>
                          </Box>
                          <Text>Add Your Questions Here</Text>
                          <Text>You haven't added any question yet. <br /> Start by adding one!</Text> 
        </Td>
        
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>   
        </>
    );
};

export default Tabs;