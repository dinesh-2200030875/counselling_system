import React, { useState } from 'react';
import { AppBar, Tab, Toolbar, Typography, Tabs } from '@mui/material';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg'

const Header = () => {
  const [value, setValue] = useState(0); 

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#232F3d' }} position='sticky'>
         <Toolbar>
          <img src={logo} width={90}/>
        <Typography><AddHomeIcon/></Typography>
          <Typography> <h3>Counselling and visitor management system</h3> </Typography>

          <Tabs
            sx={{ ml: 'auto' }}
            textColor='inherit'
            indicatorColor='primary'
            value={value} // Set the value prop to control the active tab
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to='Signup' label='SignUp' />
            <Tab LinkComponent={NavLink} to='SignIn' label='SignIn' />
            <Tab LinkComponent={NavLink} to='AddCounsellor' label='Add Counsellor' />
            <Tab LinkComponent={NavLink} to='Appointment' label='Appointment' />
            <Tab LinkComponent={NavLink} to='Contactus' label='Add Contactus' />
            <Tab LinkComponent={NavLink} to='Fetchregistration' label='Registrations' />              
            <Tab LinkComponent={NavLink} to='/logout' label="Logout"/>              

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;