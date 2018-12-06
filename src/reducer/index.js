 import {ActionType} from '../action';
 const initialState = {
       project :[],
       chandra:[]
 }

  const  postReducer = (state = initialState , action ) =>{
        switch(action.type){
          case ActionType.POST_ADD_USER:
             
              return {
                ...state,
                project:[...state.project,action.payload]
              }
            
              case ActionType.POST_DELETE_USER:
                 const deletPost = state.project.filter( post => post.id !== action.payload )
                 return {
                     ...state,
                     project:deletPost
                 }
               
               case ActionType.POST_EDIT_USER:
                   const editPost = state.project.map( post => post.id === action.payload ? {...post , userEditing :!post.userEditing } : post  )  
                
                  return{
                        ...state,
                        project:editPost
                      }  

                  case ActionType.POST_UPDATE_USER:
                  debugger
                    const update = state.project.map( post => {
                        if(post.id === action.payload.data.id){
                          debugger
                          return{
                           
                             ...action.payload.data.obj,
                            userEditing:!post.userEditing
                          }
                          debugger
                        }else{
                           return post
                        }
                    }) 
                   return {
                      ...state,
                      project:update
                   }   

          default :{
            return state ;
          }
        }
      

 } 

 export default postReducer ;