import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootreducer from './rootreducer/index'
import{composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'


const store = createStore(
    rootreducer, composeWithDevTools( applyMiddleware(thunk))
    
);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();