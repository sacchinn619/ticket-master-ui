import axios from '../config/axios'

export const setEmployee=(data)=>{
    return{
        type:'SET_EMPLOYEE',
        payload:data
    }
}
export const addEmployee=(data)=>{
    return{type:'ADD_EMPLOYEE',payload:data}
}

export const startGetEmployee=(formData)=>{
    return function(dispatch){
      axios.post('/employees',formData,{
          headers:{
              'x-auth':localStorage.getItem('authToken')
          }
      })
      .then((response) => {
        if(response.data.hasOwnProperty('errors')) {
            alert(response.data.message)
        } else {
            const data = response.data
        //    console.log(data)
        dispatch(addEmployee(data))
     
    }
})
    }
}
export const startSetEmployee=()=>{
    return function(dispatch){
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(setEmployee(data))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
const removeEmployee=(id)=>{
    return{type:'REMOVE_EMPLOYEE',payload:id}
}
export const startRemoveEmployee=(id)=>{
    return function(dispatch){
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const id=response.data
            console.log(id)
            dispatch(removeEmployee(id))
        })
        .catch((err)=>{
            alert(err)
        })
    }

}
export  const editEmployees=(data,id)=>{
       return {type:'EDIT_EMPLOYEES' ,payload: {data,id}}
}
export const startEditEmployee=(data,id)=>{
    return function(dispatch){
        axios.put(`employees/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(editEmployees(data,id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}