import React, {useContext, createContext, useState} from 'react';

const LoaderContext = createContext(false);

export const LoaderProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{isLoading, setLoading}}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
