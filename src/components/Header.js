import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import {useHistory} from 'react-router-dom';
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history=useHistory();
  const redirectToLogin =()=>{
    history.push('/login');
  }
  const redirectToRegister =()=>{
    history.push('/register');
  }
  const logoutHandler =()=>{
    localStorage.clear();
    window.location.reload();
  }
  if(hasHiddenAuthButtons){
    return(
      <Box className="header">
      <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Stack direction="row" spacing={1} alignItems="center">
     <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={()=> history.push('/')}
      >
        Back to explore
      </Button> 
      </Stack>
      </Box>
    )
  }
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Stack direction="row" spacing={1} alignItems="center">
        {
          localStorage.getItem("username")?
          (<>
            <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
            <p>{localStorage.getItem("username")}</p>
            <Button onClick={logoutHandler}>Logout</Button>
          </>)
          :
          (<><Button onClick={redirectToLogin}>Login</Button>
          <Button  onClick={redirectToRegister} variant="contained" >Register</Button></>)
        }
        </Stack>
      </Box>
    );
};

export default Header;
