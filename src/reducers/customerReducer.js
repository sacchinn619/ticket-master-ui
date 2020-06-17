const customerReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_CUSTOMER':{
            return state.concat(action.payload)
        }
        default:{
            return state
        }
    }

}
export default customerReducer