import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';
import Navbar from '../components/Home/Navbar'
import {useState} from 'react';


const MainNavbar = (props) => (
 
  
  <AppBar
    elevation={0}
    {...props}
  >
     
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <RouterLink to="/cart">
       
        
      </RouterLink>
    </Toolbar>
  </AppBar>
  
);

export default MainNavbar;
