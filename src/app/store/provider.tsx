"use client";
import React, { ReactNode } from "react";
import store, { persistor } from ".";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

interface AppProviderProps {
    children: ReactNode; // Define children prop with ReactNode type
  }
  
  const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };
  
  export default AppProvider;