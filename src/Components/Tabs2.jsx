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
  Flex,
} from '@chakra-ui/react'
import Forms from './Forms';
  
const Tabs2 = () => {

    
    return (
        <>
         <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th textAlign={'center'}>Question List</Th>     
      </Tr>
    </Thead>
    <Tbody >
      <Tr>
        <Td overflow={'scroll'} height={'300px'}> 
            <Forms ></Forms></Td>
        
      </Tr>
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th >
            <Flex gap={2} justifyContent={'end'}>
                <Button>Reset</Button>
            <Button>Add Question</Button>
            </Flex>
            </Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>   
        </>
    );
};

export default Tabs2;