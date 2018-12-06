 import {ActionType} from '../action';
 const initialState = {
       project :[]
 }

  const  postReducer = (state = initialState , action ) =>{
        switch(action.type){
          case ActionType.POST_ADD_USER:
              let add = state.project;
              add.push(action.payload)  
              return {
                ...state,
                project: add
              }
          default :{
            return state ;
          }
        }
      

 } 

 export default postReducer ;