import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Checkbox, Button } from '@chakra-ui/react';
import React from 'react';
import Menus from './Menu';
import { ChevronDownIcon } from '@chakra-ui/icons';


const dat=[{title: 'ytt', count: 0, create:'November 05, 2025', author:'admin', status:'Draft', action:'...'},
           {title: 'ui', count: 0, create:'November 05, 2025', author:'admin', status:'Draft', action:'...'},
           {title: 'yr', count: 1, create:'November 05, 2025', author:'admin', status:'Published', action:'...'},
          ]

const Tab = () => {
    return (
        <div>
           <TableContainer py={'2rem'}>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th><Checkbox></Checkbox></Th>
        <Th>  Tittle</Th>
        <Th width='10%' textAlign='center'>Questions Count</Th>
        <Th textAlign='center'>Created</Th>
        <Th>Author</Th>
        <Th  textAlign='center'>Status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {dat.map(da=>(<Tr>
        <Td><Checkbox></Checkbox></Td>
        <Td>{da.title}</Td>
        <Td width='10%' textAlign='center'>{da.count}</Td>
        <Td textAlign='center'>{da.create}</Td>
        <Td>{da.author}</Td>
        <Td textAlign='center'><Button width='45%' rounded='25px'>{da.status} <ChevronDownIcon/></Button></Td>
        <Td><Menus/></Td>
      </Tr>))}
      </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
        </div>
    );
};

export default Tab;