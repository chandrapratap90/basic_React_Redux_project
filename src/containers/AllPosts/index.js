import React, { Component } from 'react';
import AllPost from '../../components/AllPost' 
import {connect} from 'react-redux';
import{deletePost ,editPost} from '../../action' ;
import EditUser from '../EditComponent/EditUser'
export class AllPosts extends Component {

  handlerDelete = (id) =>{
       // console.log(id)
       this.props.dispatch(deletePost(id))
  }
  handlerEdit =(id) =>{
    this.props.dispatch(editPost(id))
  }


  render() {
    return (
      <div> 
         <h1>All Posts</h1>
            {
              this.props.posts.map( post =>{
                return (
                  <div key={post.id}>
                        {
                          post.userEditing ? <EditUser post ={post} /> : <AllPost  handlerEdit = {this.handlerEdit}post ={post} handlerDelete={this.handlerDelete}/>
                        }
                   </div> 
                )
              })
            }
             
              
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
    return {
       posts:state.postReducer.project
    }
}
export default connect(mapStateToProps)(AllPosts)
