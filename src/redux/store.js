import { createStore, applyMiddleware } from "redux";

import Logger from "redux-logger";

import rootReducer from "./root-reducers";

const middleware = [Logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
