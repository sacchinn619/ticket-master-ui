import axios from '../config/axios'

export const setDepartment=(data)=>{
    return{type:'SET_DEPARTMENT',payload:data}
}
export const startSetDepartment=()=>{
    return function(dispatch){
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(setDepartment(data))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const  addDepartment=(data)=>{
return {type:'ADD_DEPARTMENT',payload:data}
}
export const startGetDepartment=(formData)=>{
    return function(dispatch){
        axios.post('/departments',formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const data = response.data
                // console.log(data)
               dispatch(addDepartment(data))
            }
        })
       
    }
}
export const removeDepartment=(id)=>{
return{ type:'REMOVE_DEPARTMENT',payload:id}
}
export const startRemoveDepartment=(id)=>{
    return function(dispatch){
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const id=response.data
            console.log(id)
            dispatch(removeDepartment(id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const editDepartment=(data,id)=>{
    return {type:'EDIT_DEPARTMENT',payload:{data,id}
}
}
export const startEditDepartment=(formData,id)=>{
     return function(dispatch){
     axios.put(`/departments/${id}`,formData,{
         headers:{
             'x-auth':localStorage.getItem('authToken')
         }
     })
     .then((response)=>{
         const data=response.data
        dispatch (editDepartment(data,id))
     })
     .catch((err)=>{
         console.log(err)
     })
     }
}    