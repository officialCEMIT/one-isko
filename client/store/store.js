import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension'; 

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
  
});
const store = createStore(
  combineReducers,
  {},
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
