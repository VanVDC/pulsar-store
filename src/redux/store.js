import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducers from "./root-reducers";

import logger from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);
