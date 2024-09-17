
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


import { rootReducer } from "./root-reducer";


export type AppStore = typeof store
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']  


const middlewares = [ logger];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store=configureStore({
  reducer:rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middlewares)
})