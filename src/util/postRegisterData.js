
const postData = async(params,setMessage)=>{
    try {
            const rawResponse = await fetch('/users/register', {
              body: JSON.stringify(params), 
              method: 'POST',
              headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
              }
          });
  
          const result = await rawResponse.json();
          if(rawResponse.ok) {
              console.log('register successful');
              setMessage("Registration Successful. Please Login! ");  
          } else {
              const error = new Error();
              error.message = result.message || 'Something went wrong.';
              let rootcause = result.root_cause.split('[')[1].split(']')[0];
              setMessage(rootcause + ' is invalid'); 
          }
      }  catch(e) {
            setMessage('Something went wrong'); 
      }  
  }