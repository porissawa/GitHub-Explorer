import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  // add reducers
});
const appStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default appStore;
