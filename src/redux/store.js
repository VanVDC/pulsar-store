import { createStore, applyMiddleware } from "redux";

import { rootReducers } from "./root-reducers";

import logger from "redux-logger";

const middleware = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middleware));
