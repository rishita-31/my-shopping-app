import { useState } from "react";

const useAuth = (data = {
    username: '',
    password: ''
  }, path = '/signIn') =>{
    const [userState, setUserState] = useState(data);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      const manageChange = (e) => {
        setUserState(prevData => ( { ...prevData , [e.target.name]: e.target.value }));
        // console.log(userState);
      }

      const manageSubmit = (e) => {
        e.preventDefault();
        
          fetch(path , {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userState)
      }).then(response => {
        if(!response.ok){
            console.log(response);
          if(response.status === 401) return window.alert('Invalid username or password')
          else if (response.status === 500) return window.alert('Check your internet connection')
          else return window.alert('Something went wrong!!, try again')
        }else{
          response.json().then((result)=> {
            console.log(result);
            if(!result.auth) throw Error(result.error.message)
            window.alert(result.message);
            localStorage.setItem('token',result.token)
            setIsLoggedIn(true);
          })
          .catch(err => window.alert(err.message));
        }
      }
      );
    
    }
    return {isLoggedIn, manageChange,manageSubmit} 
}

export default useAuth;