import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useGetGenreNamesQuery } from '../services/moviedb';

// Sets language for the app


export default function SetLangMenu() {
    const [langs, setLangs] = useState("");

    
    const doBothThings = (popupState, language) => {
      popupState.close(language)
      setLangs(language)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} >
            Set Language
          </Button>
          <Menu {...bindMenu(popupState)}> 
            <MenuItem onClick={() => doBothThings(popupState, "en-US")}>English</MenuItem>
            <MenuItem onClick={() => doBothThings(popupState, "es-MX")}>Español</MenuItem>
            <MenuItem onClick={() => doBothThings(popupState, "sv-SE")}>Svenska</MenuItem>
            <MenuItem onClick={() => doBothThings(popupState, "de-DE")}>Deutsch</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};