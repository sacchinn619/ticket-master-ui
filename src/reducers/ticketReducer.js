const ticketReducer=(state=[],action)=>{
   switch(action.type){
       case 'SET_TICKET':{
           return state.concat(action.payload)
       }
       case 'REMOVE_TICKET':{
           return state.filter(ele=>{
               return ele._id!==(action.payload)
           })
       }
       default:{
           return state
       }
   }
}
export default ticketReducer