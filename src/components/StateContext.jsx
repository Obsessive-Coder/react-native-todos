import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <StateContext.Provider value={[theme, setTheme]}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;