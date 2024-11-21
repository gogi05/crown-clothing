import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedUser, createUserfromAuth } from "../utils/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const userValue = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedUser((user) => {
      if (user) {
        createUserfromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};
