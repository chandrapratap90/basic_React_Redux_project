import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import PostForm from './containers/PostForm';
import AllPosts from './containers/AllPosts';




class App extends Component {
  

  render() {
    console.log("Apps Page props",this.props)

    return (
      <div className="App">
               <Header/>
            <div className="row">
                  <div className="side">
                    <PostForm/>
                 </div>
                    <div className="main">
                      <AllPosts/>
                        
                    </div>
            </div>

<div className="footer">
  <h2>Footer</h2>
</div>
      </div>
    );
  }
}


export default  App;
