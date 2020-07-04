const ticketReducer=(state=[],action)=>{
   switch(action.type){
       case 'SET_TICKET':{
           return state.concat(action.payload)
       }
       case 'REMOVE_TICKET':{
           return state.filter(ele=>{
               return ele._id!==(action.payload._id)
           })
       }
       case 'EDIT_TICKET':{
           return state.map((ele)=>{
               if(ele._id==action.payload.id){
                   return Object.assign({},ele,action.payload.data)
               }else{
                   return Object.assign({},ele)
               }
           })
       }
       default:{
           return state
       }
   }
}
export default ticketReducer