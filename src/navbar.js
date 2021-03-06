import React, { Fragment } from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const unchainedLogo = require('./images/logo.png');
const twitterLogo = require('./images/twitterLogo.png')
const githubLogo = require('./images/github.png')

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <AppBar style={{ background: '#06060a'}}>
      <Toolbar variant="dense">
        <Button
          color="inherit"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem component={Link} to='/' onClick={handleCloseMenu} style={{fontFamily: "Luckiest Guy", letterSpacing: 2, paddingLeft: 15, paddingTop: 10, paddingRight: 15}}>{`unchained`}</MenuItem>
          <Divider style={{ marginBottom: 10, marginTop: 10 }} />
          <a style={{textDecoration: "none", color: 'black'}} href="https://app.unchained.fyi"><MenuItem style={{fontFamily: "Luckiest Guy", letterSpacing: 2}}>NEAR API</MenuItem></a>
          <MenuItem component={Link} to="/roadmap" onClick={handleCloseMenu} style={{fontFamily: "Luckiest Guy", letterSpacing: 2, paddingTop: 15}}>Roadmap</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleCloseMenu} style={{fontFamily: "Luckiest Guy", letterSpacing: 2, paddingTop: 15}}>About Us</MenuItem>
        </Menu>
          <Fragment>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }} style={{ color: "#E4E5F1", textDecoration: 'none' }}>
              <img alt="unchained company logo" hidden={window && window.innerWidth < 275} src={unchainedLogo} style={{ width: 24, marginTop: 8 }} />
            </Typography>
              <div style={{paddingRight: 15}}>
                <a href="https://twitter.com/unchainedllc" target="_blank" rel="noopener noreferrer">
                  <img alt="unchained twitter account" src={twitterLogo} style={{width: 20, marginTop: 8, paddingRight: 15}}/>
                </a>
                <a href="https://github.com/unchainedfyi" target="_blank" rel="noopener noreferrer">
                  <img alt="unchained github account" src={githubLogo} style={{width: 20, marginTop: 8}}/>
                </a>
              </div>
          </Fragment>
      </Toolbar>
    </AppBar>
    </Fragment>
  );
};