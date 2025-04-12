import React, { useState } from 'react';
import { Button, Popover, List, ListItem, ListItemText } from '@mui/material';

export default function ListaPopover() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Mostrar Lista
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem><ListItemText primary="Item 1" /></ListItem>
          <ListItem><ListItemText primary="Item 2" /></ListItem>
          <ListItem><ListItemText primary="Item 3" /></ListItem>
        </List>
      </Popover>
    </div>
  );
}
