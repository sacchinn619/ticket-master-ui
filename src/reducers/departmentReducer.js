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
              return ele._id != (action.payload._id)
            })
          }
          case 'EDIT_DEPARTMENT':{
            return state.map(dep=>{//mapping depart array[{},{}]that contains each ele as an object//
              if(dep._id==action.payload.id){
                  return Object.assign({},dep,action.payload.data)
                  
              }
              else{
                  return Object.assign({},dep)
              }
          })
          }
          
           default:{
               return state
           }
       }
}
export default departmentReducer