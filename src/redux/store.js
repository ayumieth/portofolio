import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import themeReducer from "./reducer/themeReducer";
const rootReducer = combineReducers({
  theme: themeReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;