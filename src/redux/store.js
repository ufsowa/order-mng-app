import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState.js';
import {tablesReducer, loadingReducer} from './tablesReducer.js';

//common selectors
export const getAllStatus = ({status}) => status;

const subreducers = {
    tables: tablesReducer,
    loading: loadingReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;