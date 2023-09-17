import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: true,
});

sagaMiddleWare.run(rootSaga);

export default store;
