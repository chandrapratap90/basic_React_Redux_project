import React from 'react'

const Postform = (props) => {
  return (
    <div>
  <h1>Create Post</h1>
  <form onSubmit={props.handlerSubmit}>
   <input required type="text" id="getTitle"  value ={props.getTitle}placeholder="Enter Post Title"  onChange= {props.handlerchange} className="form-control" /><br /><br />
   <textarea required rows="5" id="getMessage" value={props.getMessage} cols="28" placeholder="Enter Post" onChange={props.handlerchange} className="form-control" /><br /><br />
   <button className="btn">Post</button>
  </form>
</div>
  )
}

export default Postform
