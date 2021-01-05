import thunk from "redux-thunk";
import postsReducer from "./reducers/postsReducer";

// IMPORT REDUX FEATURES
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'

// ROOT REDUCER
const rootReducer = combineReducers({
  postsPage: postsReducer,
  form: formReducer
});

// TYPES + ROOT STATE
type reducersType = typeof combineReducers;
export type RootState = ReturnType<reducersType>;

// CREATE STORE
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
