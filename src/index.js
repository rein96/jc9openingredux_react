import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import App from './components/App';
import reducers from './reducers/index'



// redux-logger untuk melihat log apa saja yang terjadi di database STORE kita )database lama - action - dabase baru)
// npm i --save redux-logger



// membuat store, yang banyak lacinya
var STORE = createStore(reducers, applyMiddleware(logger))   //createStore = redux synthax

ReactDOM.render(
    <Provider store = {STORE}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
// App.js dibungkus Provider store = {store}, agar app dikasih STATE(store)