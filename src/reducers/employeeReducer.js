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
            return ele._id!==(action.payload)
        })
    }
    
    default:{
        return state
    }
}
}
export default employeeReducer