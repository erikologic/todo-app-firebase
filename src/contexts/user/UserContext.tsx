import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { SignInElem } from "./SignInElem";
import { auth } from "../../libs/firebase";

interface ToDoUser {
  email: string | null;
  logout: () => void;
}

export interface IAuthContext {
  user?: ToDoUser;
  SignInElem: React.FC;
}

const defaultUserContext = { SignInElem };
export const UserContext = createContext<IAuthContext>(defaultUserContext);
export const useUserContext = (): IAuthContext => useContext(UserContext);

type PropsChildren = { children: ReactNode };
export const UserContextProvider: React.FC<PropsChildren> = ({ children }) => {
  const [context, setContext] = useState<IAuthContext>(defaultUserContext);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      if (user) {
        setContext({
          ...defaultUserContext,
          user: {
            logout: () => {
              auth.signOut().then(() => setContext(defaultUserContext));
            },
            email: user.email,
          },
        });
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
