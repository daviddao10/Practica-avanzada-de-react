import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// components
import { logger } from "./middlewares";
import { producstReducer } from "./reducers/Products";


const composedEnhancers = compose(
  composeWithDevTools(),
  applyMiddleware(logger,thunk)
  
);

export const store = createStore(producstReducer, composedEnhancers);