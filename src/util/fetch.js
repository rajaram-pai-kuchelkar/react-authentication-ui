

async function login(dispatch, email, password, history,setMessageLogin) {
    const param = window.btoa(`${email}:${password}`);
    
    console.log(param);
    try {
        const rawResponse = await fetch('/auth/login', {
            method: 'POST',
        
            headers: {
              
              "Content-Type": "application/json", 
              authorization: `Basic ${param}`
            }
        });
  
        const result = await rawResponse.json();
        if(rawResponse.ok || rawResponse.Accepted) {
            window.sessionStorage.setItem('user-details', JSON.stringify(result));
            console.log('login successful');
            //const data = {isOpen:false, loginTitle:"Logout", visibility: "hidden", color : "secondary"};
            //const disableButtonData = {appointmentBtn:false};
            //dispatch({"type": "LOGIN_SETUP" , payload : data });
            //dispatch({"type": "DISABLE_BUTTON",payload : disableButtonData});
            setMessageLogin('');
        } 
        else {
            const error = new Error();
            error.message = result.message || 'Something went wrong.';
            if(error.message.length < 50 )
              setMessageLogin(error.message);
            else
              setMessageLogin('Something went wrong!');
        }
    } catch(e) {
        setMessageLogin('Something went wrong ! Try again');
    }
  }


  