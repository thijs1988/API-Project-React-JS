import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from "react-router-redux";
import {Route, Switch} from "react-router";
import {Provider} from "react-redux";
import App from "./components/App";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';
import {tokenMiddleware} from "./middleware";

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, tokenMiddleware)
);
const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'))