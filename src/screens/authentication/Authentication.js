import React , {Fragment,useState } from 'react';
//import '@fontsource/roboto/700.css';
//import Button from '@material-ui/core/Button';
import './Authentication.css';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
//import Input from '@material-ui/core/Input';
//import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import {useDispatch} from 'react-redux';
//import { useHistory } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <div
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
}


export default function Authentication(props) {
  const [value, setValue] = useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Fragment>
      <div className="outerbox">
        <div className="outerbox-titleblock">
          <Typography className="outerbox-titleblock-heading" variant="h6">Authentication</Typography>
        </div>

        <div className="outerbox-contents">
              <AppBar position="static">
                <Tabs value={value} 
                  className="tabs"
                  variant="fullWidth"
                  onChange={handleChange} >
                 
                    <Tab label="Login" id="tab-1" />
                    <Tab label="Register" id="tab-2" />
                </Tabs>
              </AppBar>

              <TabPanel className= "tabpanel" value={value} index={0}>
                  <Login />
              </TabPanel>       
              
              <TabPanel className= "tabpanel" value={value} index={1}>      
                  <Register /> 
              </TabPanel>    
        </div>
      </div>
    </Fragment>
  );
}
