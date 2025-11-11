
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  MenuGroup,

  MenuDivider,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Menus = () => {
    return (
        <>
    <Menu>
    <MenuButton as={Button} >
    ...
    </MenuButton>
  <MenuList>
    <MenuGroup >
      <MenuItem>Edit</MenuItem>
      <MenuItem>View </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup >
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Trash</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>  
        </>
    );
};

export default Menus;