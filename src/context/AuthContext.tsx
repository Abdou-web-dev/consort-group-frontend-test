import { createContext, useEffect, useState } from "react";

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

  // The purpose of this useEffect block in the context is to persist the user's authentication state across page refreshes. When a user logs in or authenticates, the authentication state is stored in the browser's local storage. When the user refreshes the page or visits the site again, this useEffect checks for the presence of the "user" key in local storage. If it's found, the global isConnected state is set to true, ensuring that the user remains authenticated even after refreshing the page. This is a common technique to maintain user sessions and prevent users from being automatically logged out on page refreshes.

  useEffect(() => {
    // Check if the user is already authenticated in localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setIsConnected(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ setIsConnected, isConnected }}>
      {children}
    </AuthContext.Provider>
  );
};
