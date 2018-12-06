export const ActionType = {
     POST_ADD_USER : 'POST_ADD_USER',
     POST_DELETE_USER:'POST_DELETE_USER',
     POST_EDIT_USER: 'POST_EDIT_USER',
     POST_UPDATE_USER : 'POST_UPDATE_USER'
}

 
export const addPost = (obj) =>{
      return {
            type:ActionType.POST_ADD_USER,
            payload:obj

      }
}

export const deletePost= (id) =>{
      debugger;
      return {
          type:ActionType.POST_DELETE_USER,
          payload:id
      }
}
export const editPost = (id) =>{
      debugger;
      return {
            type:ActionType.POST_EDIT_USER,
            payload:id
      }
}

export const updatePost = (data) =>{
      debugger
      return{
            type:ActionType.POST_UPDATE_USER,
            payload:data
      }
}