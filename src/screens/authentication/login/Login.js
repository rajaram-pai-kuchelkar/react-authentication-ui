import React , {Fragment,useState} from 'react';
import Field from '../../../common/field/Field';
import './Login.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Validation from '../../../util/Validation1';




export default function Login(props) {
  const [serverMessage,setServerMessage]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  let vali = new Validation();
  
  
  const onFormSubmitted = (e)=>{
    e.preventDefault();
    const params ={
      
      "emailId": email,
      "password": password
     
    }
   // postData(params,setMessage);
   console.log(params);
   setServerMessage("login successful");
  } 



  return (
    
    <Fragment>
       <form  className= "card-main-content" onSubmit={onFormSubmitted}>
          <Field {...props} id="login-email" fieldName= 'Email Id'   fieldType= 'text' fieldHelper= 'Enter a Valid Email Id'  fieldValue= {setEmail} validator= {(a)=>{return vali.validateEmail(a);}}/>
          <Field {...props} id= "login-password" fieldName= 'Password'   fieldType= 'password' fieldHelper= 'Please fill out this field' fieldValue= {setPassword} validator= {(a)=>{return vali.validateField(a);}}/>  
          <Button  className= "btn" id="btn-login" color="primary" variant="contained" type="submit" >Login</Button>
          <Typography  className="message" variant="subtitle1" gutterBottom>
                {serverMessage}
          </Typography>
        </form>        
    </Fragment>
  );
}

