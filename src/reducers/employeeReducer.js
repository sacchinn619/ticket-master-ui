const employeeReducer=(state=[],action)=>{
switch(action.type){
case 'ADD_EMPLOYEE':{
    return state.concat(action.payload)
}
    case 'SET_EMPLOYEE':{
        return state.concat(action.payload)
    }
    case 'REMOVE_EMPLOYEE':{
        return state.filter((ele)=>{
            return ele._id!==(action.payload._id)
        })
    }
    case'EDIT_EMPLOYEES':{
        return state.map((ele)=>{
            if(ele._id==action.payload.id){
               return Object.assign({},ele,action.payload.data)
            } else{
               return Object.assign({},ele)
            }
        })
    }
    
    default:{
        return state
    }
}
}
export default employeeReducer