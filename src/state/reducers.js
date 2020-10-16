import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./reducers/news";

const rootReducer = combineReducers({
  newsReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["newsReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
