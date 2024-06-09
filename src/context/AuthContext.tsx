import React, { createContext, useState, useEffect } from "react";
import { parseJwt } from "../utils/aboutjson";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  isTokenExpired: () => boolean;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
  isTokenExpired: () => false,
});

export function AuthProvider({
  children,
}: React.FC<{ children: React.ReactNode }>) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for stored token in local storage (or your chosen storage)
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const isTokenExpired = (): boolean => {
    if (!token) return true; // Return true if no token exists

    try {
      const decodedToken = parseJwt(token); // Assuming JWTs
      const expirationTime = decodedToken.exp * 1000; // Convert milliseconds from seconds
      const currentTime = Date.now();
      return expirationTime < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Assume expired if decoding fails for safety
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isTokenExpired }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
