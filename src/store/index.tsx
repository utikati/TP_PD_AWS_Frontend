import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./ducks/rootReducer";
import { IMapState } from "./ducks/map/types";
import { ISearchState } from "./ducks/search/types";


export interface ApplicationState {
  MAP: IMapState;
  SEARCH: ISearchState;
}

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["STORAGE"],
};

const persistedReducer = persistReducer<ApplicationState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
