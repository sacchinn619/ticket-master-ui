import axios from '../config/axios'

export const setUser=(user)=>{
     return{ type:'SET_USER', payload: user }
}
export const startLoginUser=(formData,redirect)=>{
return function(dispatch){
    axios.post('/users/login',formData)
.then((response)=>{
     if(response.data.hasOwnProperty('error')){
          alert(response.data.error)
     }else{
         alert('Sucessfully Logged in')
        localStorage.setItem('authToken',response.data.token)
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user= response.data
            dispatch(setUser(user))
            redirect()
        })
        .catch((err)=>{
            alert(err)
        })
        
           }
})
.catch((err)=>{
    console.log(err)
})
}
}

//for preventing data while Reload//
export const startGetUser=()=>{
    return(dispatch)=>{
     axios.get('/users/account', {
         headers:{
             'x-auth': localStorage.getItem('authToken')
         }
     })
     .then((response)=>{
         const user=response.data
         dispatch(setUser(user))
     })
     .catch((err)=>{
         alert(err)
     })
    }
}

export const startRegisterUser=(formData,redirect)=>{
return function(dispatch){
axios.post('users/register',formData)
.then((response)=>{
       if(response.data.hasOwnProperty('errors'))  {
           alert(response.data.message)
       }     else{
           alert('You have sucessfully registered')
           redirect()
       }
})
.catch((err)=>{
    console.log(err)
})
}
}

export const startUserLogout=()=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
          if(response.data.notice){
              alert(response.data.notice)
              localStorage.removeItem('authToken')
              dispatch(setUser({}))
              window.location.href="/"
          }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}