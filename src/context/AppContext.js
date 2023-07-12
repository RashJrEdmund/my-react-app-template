const { createContext, useContext, useState } = require('react');

const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <AppContext.AppContextProvider value={{ data, setData }}>
      {children}
    </AppContext.AppContextProvider>
  );
}

export const useAppContext = () => useContext(AppContext);
