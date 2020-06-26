const customerReducer=(state=[],action)=>{
    // console.log(state)
    switch(action.type){
        case 'SET_CUSTOMER':{
            return state.concat(action.payload)
        }
        case 'EDIT_CUSTOMER':{
            return state.map(cust=>{//mapping customer array[{},{},{},{}]that contains each ele as an object//
                if(cust._id==action.payload.id){
                    return Object.assign({},cust,action.payload.data)
                    
                }
                else{
                    return Object.assign({},cust)
                }
            })
            
        }
        default:{
            return state
        }
    }

}
export default customerReducer