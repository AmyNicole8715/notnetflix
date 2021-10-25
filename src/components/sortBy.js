import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// sortGenre needs set the parameter of rtk query
// this needs to build menu from an array from genres.id and display genres.name in menu, and then sort movies by that, and then display the sorted movies
// it will need to upon selection also update the selected genre in the state

export default function SortByMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} >
            Sort By
          </Button>
          <Menu {...bindMenu(popupState)}> 
            <MenuItem onClick={popupState.close}>Popularity</MenuItem>
            <MenuItem onClick={popupState.close}>Action</MenuItem>
            <MenuItem onClick={popupState.close}>Comedy</MenuItem>
            <MenuItem onClick={popupState.close}>Horror</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};