import { persistReducer, persistStore } from "redux-persist";
import rootreducer from "./rootreducer";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);


export const store = createStore(persistedReducer)

export const persistor = persistStore(store);


export default store