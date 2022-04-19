import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import {useHistory} from 'react-router-dom';
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const routeToLogin=()=>{
    history.push('/login');
  }
  const routeToRegister=()=>{
    history.push('/register');
  }
  const logout = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push('/');
    window.location.reload();
  }
  if(hasHiddenAuthButtons){
    return(
      <Box className="header">
      <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      <Stack direction="row" spacing={1} alignItems="center">
     <Button
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={()=>{history.push('/');}}
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
            <Button onClick={logout}>Logout</Button>
          </>)
          :
          (<><Button onClick={routeToLogin}>Login</Button>
          <Button onClick={routeToRegister} variant="contained" >Register</Button></>)
        }
        </Stack>
      </Box>
    );
};

export default Header;