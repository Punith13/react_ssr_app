// Startup point for the client side application 
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config';
import { createStore , applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from './reducers';
import Routes from './Routes';

const store = createStore(reducers , window.INITIAL_STATE , applyMiddleware(thunk));

ReactDom.hydrate(
<Provider store={store}>
    <BrowserRouter>
        <div>{ renderRoutes(Routes)} </div>
    </BrowserRouter>
</Provider>
    , document.querySelector("#root") ); 