import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {Reducers} from "../reducers/reducers";

const middleware = [thunk]
export const store = configureStore({
    reducer: Reducers, middleware: middleware,
  });

