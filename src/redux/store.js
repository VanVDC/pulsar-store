import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducers from "./root-reducers";

import logger from "redux-logger";

const middleware = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);
