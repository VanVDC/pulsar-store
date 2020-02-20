import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "../redux/shop/shop.sagas";

import rootReducers from "./root-reducers";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middleware));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
