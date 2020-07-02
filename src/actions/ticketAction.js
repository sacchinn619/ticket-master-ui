import axios from '../config/axios'

export const setTicket=(data)=>{
    return{type:'SET_TICKET',payload:data}

}

export const startSetTicket=()=>{
return function(dispatch){
    axios.get('/tickets',{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const data=response.data
        dispatch(setTicket(data))
    })
    .catch((err)=>{
        alert(err)
    })
}
}
export const startGetTicket=(formData)=>{
    return function(dispatch){
       axios.post('/tickets',formData,{
           headers:{
               'x-auth':localStorage.getItem('authToken')
           }
       })
       .then((response)=>{
           const data=response.data
           console.log('hello',data)
        dispatch(setTicket(data))
          
    })
       .catch((err)=>{
           alert(err)
       })
    }
}
export const removeTicket=(data)=>{
    return{type:'REMOVE_TICKET',payload:data}
}
export const startRemoveTicket=(id)=>{
   return function(dispatch){
       axios.delete(`/tickets/${id}`,{
           headers:{
               'x-auth':localStorage.getItem('authToken')
           }
       })
       .then((response)=>{
           const data=response.data
           dispatch(removeTicket(data))
       })
       .then((err)=>{
           console.log(err)
       })
   }
}
export const editTicket=(data,id)=>{
return {type:'EDIT_TICKET', payload:{data,id}}
}

export const startEditTicket=(formData,id)=>{
    return function(dispatch){
    axios.put(`/tickets/${id}`,formData,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const data=response.data
        dispatch(editTicket(data,id))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}