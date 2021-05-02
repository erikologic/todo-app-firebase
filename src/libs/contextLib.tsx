import {useContext, createContext, Dispatch, SetStateAction} from "react";

export const AppContext = createContext({
  isAuthenticated: false,
  userHasAuthenticated: (() => {}) as any       // TODO this is wrong
});

export function useAppContext() {
  return useContext(AppContext);
}
