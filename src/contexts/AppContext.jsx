import { createContext, useContext } from 'react';
import { SITE } from '@/utils/constants';

const AppContext = createContext({ site: SITE });

export function AppProvider({ children }) {
  return <AppContext.Provider value={{ site: SITE }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
