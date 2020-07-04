import axios from '../config/axios'


export const setCustomer=(customer)=>{
    return{type:'SET_CUSTOMER',payload:customer}
}

export const startGetCustomer=(formData)=>{
    return function(dispatch){
        axios.post('/customers',formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const customer = response.data
               console.log(customer)
               dispatch(setCustomer(customer))
            }
       
        })
        
        
  
    }
}
export const startSetCustomer=()=>{
    return function(dispatch){
          axios.get('/customers/',{
              headers:{
                  'x-auth':localStorage.getItem('authToken')
              }
          })
          .then((response)=>{
              const customer=response.data
              dispatch(setCustomer(customer))
          })
          .catch((err)=>{
              console.log(err)
          })
    }
}
export const removeCustomer=(data)=>{
return {type:'REMOVE_CUSTOMER', payload:data}
}
export const startRemoveCustomer=(id)=>{
    return function(dispatch){
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(removeCustomer(data))
        })
    }

}
export const EditCustomer=(id,data)=>{
return{type:'EDIT_CUSTOMER', payload:{
    id,data
}}
}
export const startEditCustomer=(formData,id)=>{
      return function(dispatch){
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const cust=response.data
            dispatch(EditCustomer(id,cust))
        })
        // .then((err)=>{
        //     console.log(err)
        // })
      }
}
