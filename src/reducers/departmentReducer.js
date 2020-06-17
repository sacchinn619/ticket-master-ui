const departmentReducer=(state=[],action)=>{
       switch(action.type){
         case 'ADD_DEPARTMENT':{
           return state.concat(action.payload)
         }
         case 'SET_DEPARTMENT':{
             return state.concat(action.payload)
           }
           case 'REMOVE_DEPARTMENT':{
            return state.filter((ele)=>{
              return ele._id != (action.payload)
            })
          }
           default:{
               return state
           }
       }
}
export default departmentReducer