import React from 'react'

const AllPost = (props) => {
  return (
    <div>
      
     
        <div >
        
              <h2>{props.post.getTitle}</h2>
              <p>{props.post.getMessage}</p>
              <button className="btn edit" onClick={()=>props.handlerEdit(props.post.id)}>Edit</button>
              <button className="btn delete" onClick={()=>props.handlerDelete(props.post.id)}>Delete</button>
          </div>
       
     
    </div>
  )
}

export default AllPost
