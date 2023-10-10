import { createContext, useState } from "react";

export interface AuthContext {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContext>({
  setIsConnected: () => {}, // Initialize with an empty function
  isConnected: false,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ setIsConnected, isConnected }}>
      {children}
    </AuthContext.Provider>
  );
};
