import {useContext, createContext, Dispatch, SetStateAction} from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  userHasAuthenticated: (() => {}) as any       // TODO this is wrong
});

export function useAuthContext() {
  return useContext(AuthContext);
}
