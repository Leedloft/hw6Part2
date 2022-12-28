import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './style.module.css'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          <Link className={styles.text_div1} to='/'>Home</Link>
          <Link className={styles.text_div2} to='/about'>About Us</Link>
          <Link className={styles.text_div3} to='/about/signin'>Sign In</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}