import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { searchUserReducer, authReducer } from "./reducers";
import { issuesReducer } from "./issues-reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  searchUserReducer,
  authReducer,
  issuesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
