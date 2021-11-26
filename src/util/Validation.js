class Validation{

validateField(a){
    if(a=== "")
      return false;  
    else 
      return true;
}

validateMobile(a){
    const mobilere = "^\\d{10}$";
      if(a.match(mobilere))
          return true;
      else
          return false;
}

validateEmail(a){
    const emailre = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(a.match(emailre))
          return true;
        else
          return false;
}


}

export default Validation;