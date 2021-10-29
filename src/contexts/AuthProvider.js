import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const firebaseContext = useFirebase();

  return (
    <div>
      <AuthContext.Provider value={firebaseContext}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
