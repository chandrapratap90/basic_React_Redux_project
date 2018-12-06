import React, { Component } from 'react'
import  PostForm from '../../components/PostForm'
import { addPost} from '../../action/'
import {connect} from 'react-redux'
 
export class PostForms extends Component {
    constructor(props){
        super(props);
            this.state = {
                data:{
                    getTitle:'',
                    getMessage:'',
                    
                }
                    
                
            }
         
    }

    onChangeHandler = (e) =>{
          const datapost = {[e.target.id] : e.target.value, id : new Date(), userEditing:false};
          this.setState({
            data: {...this.state.data, ...datapost}
          })
    }

    handlerSubmit= (e)=> {
        e.preventDefault()
           this.props.dispatch(addPost(this.state.data))
            console.log(this.state.data)
           this.setState({
            data:{
                getTitle:'',
                getMessage:''
            }
           })     
        }

  render() {
    return (
        
      
      <div>
           
          <PostForm handlerSubmit = {this.handlerSubmit} handlerchange ={this.onChangeHandler}
           getTitle={this.state.data.getTitle} getMessage={this.state.data.getMessage}
          />
      </div>
    )
  }
}

export default connect() (PostForms)
