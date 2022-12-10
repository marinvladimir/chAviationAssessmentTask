import React, { useState, createContext } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <GlobalContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </GlobalContext.Provider>
  );
};
