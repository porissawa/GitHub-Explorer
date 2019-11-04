import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose, Provider } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './user';
import details from './repoDetails';

const rootReducer = combineReducers({
  user,
  details
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

const appStore = createStore(rootReducer, enhancer);

export default appStore;
