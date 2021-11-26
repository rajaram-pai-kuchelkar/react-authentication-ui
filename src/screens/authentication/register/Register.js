import React , {Fragment,useState} from 'react';
import Field from '../../../common/field/Field';
import './Register.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Validation from '../../../util/Validation1';

export default function Register(props) {
  const [serverMessage,setServerMessage]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [mobile,setMobile]=useState('');
  
  
  let vali = new Validation();
  const onFormSubmitted = (e)=>{
    e.preventDefault();
    const params ={
      "firstName": firstName,
      "lastName": lastName,
      "emailId": email,
      "password": password,
      "mobile": mobile
    }
   // postData(params,setMessage);
   console.log(params);
   setServerMessage("Registration Successful");
  } 



  return (
    
    <Fragment>
       <form  className= "card-main-content" onSubmit={onFormSubmitted}>
          <Field {...props} id= "reg-fname" fieldName= 'First Name' fieldType= 'text' fieldHelper= 'Please fill out this field'  fieldValue= {setFirstName} validator={(a)=>{return vali.validateField(a);}} /> 
          <Field {...props} id= "reg-lname" fieldName= 'Last Name'  fieldType= 'text' fieldHelper= 'Please fill out this field'  fieldValue= {setLastName} validator={(a)=>{return vali.validateField(a);}}/>       
          <Field {...props} id= "reg-email" fieldName= 'Email Id'   fieldType= 'text' fieldHelper= 'Enter a Valid Email Id'   fieldValue= {setEmail} validator= {(a)=>{return vali.validateEmail(a);}}/>
          <Field {...props} id= "reg-password" fieldName= 'Password'   fieldType= 'password' fieldHelper= 'Please fill out this field'   fieldValue= {setPassword} validator= {(a)=>{return vali.validateField(a);}}/>
          <Field {...props} id= "reg-mobile" fieldName= 'Mobile No'  fieldType= 'tel' fieldHelper= 'Enter a Valid Mobile No'  fieldValue= {setMobile} validator={(a)=>{return vali.validateMobile(a);}}/>
        
          <Button  className= "btn" id="btn-register" color="primary" variant="contained" type="submit" >Register</Button>
          <Typography  className="message" variant="subtitle1" gutterBottom>
                        {serverMessage}
          </Typography>
        </form>        
    </Fragment>
  );
}

