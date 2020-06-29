import React from 'react';
import { Menu as MUIMenu, MenuItem } from '@material-ui/core';

interface Item {
  id: string;
  url: string;
  text: string;
}

interface Props {
  id: string;
  open: boolean;
  handleClose: () => void;
  targetRef: HTMLElement | null;
  items: Item[];
}

const Menu = ({ id, open, handleClose, targetRef, items }: Props) => {
  return (
    <MUIMenu id={id} anchorEl={targetRef} open={open} onClose={handleClose}>
      {items.map(item => (
        <MenuItem
          component="a"
          data-no-link="true"
          href={item.url}
          key={item.id}
          selected={false}
          onClick={handleClose}
        >
          {item.text}
        </MenuItem>
      ))}
    </MUIMenu>
  );
};

export default Menu;
