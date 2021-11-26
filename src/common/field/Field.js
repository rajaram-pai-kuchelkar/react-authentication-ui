import React , {Fragment,useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Field.css';

import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default function Field(props) {

  const[hideHelper,setHideHelper] = useState(true);
  
  return (  
    <Fragment> 
      <FormControl error={!hideHelper} required className="formcontrol">
          <InputLabel htmlFor="Contact">{props.fieldName}</InputLabel>
          <Input type={props.fieldType} id= {"input-"+ props.id}  onChange={(e)=>{setHideHelper(props.validator(e.target.value)); props.fieldValue(e.target.value);}} aria-describedby="helper-tel"/>
        { hideHelper || <FormHelperText id="helper-tel" >{props.fieldHelper}</FormHelperText>}
      </FormControl>
    </Fragment>
  );
}

