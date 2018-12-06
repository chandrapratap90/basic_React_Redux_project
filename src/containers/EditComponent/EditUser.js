import React, { Component } from 'react'
import {connect} from 'react-redux'
import{updatePost} from '../../action'

 class EditUser extends Component {
        constructor(props){
            super(props)
             this.state={
                   data:{
                    getTitle:'',
                    getMessage:'',


                   }
             }
             this.handlerUpdate= this.handlerUpdate.bind(this)
        }

        handlerchange =(e) =>{
            const updateSate = {[e.target.id]:e.target.value};
               console.log(updateSate);
              this.setState({
                  
                data:{...this.state.data ,...updateSate}
              })
        }
        
        handlerUpdate = (e,data ) => {
            e.preventDefault();
           this.props.dispatch(updatePost({data:{id:this.props.post.id, obj:this.state.data}}))  
        }

      

  render() {
   
    return (
        <div>
        <h1>User Post Update </h1>
        <form onSubmit={this.handlerUpdate}>
        <input required type="text" id="getTitle"  value ={this.state.getTitle}  defaultValue={this.props.post.getTitle} placeholder="Enter Post Title"  onChange= {this.handlerchange} className="form-control" /><br /><br />
        <textarea required rows="5" id="getMessage" value={this.state.getMessage}  defaultValue={this.props.post.getMessage}cols="28" placeholder="Enter Post" onChange={this.handlerchange} className="form-control" /><br /><br />
         <button className="btn">User Post Update</button>
        </form>
      </div>
    )
  }
}

export default connect() (EditUser)
