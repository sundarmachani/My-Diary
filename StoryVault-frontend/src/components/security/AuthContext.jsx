import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { jwtAuthApiCall } from "../api/AuthenticationApiService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

    async function Login(username, password) {

    try {
      const response = await jwtAuthApiCall(username, password);
      if (response.status == 200) {
        const token = "Bearer " + response.data.token;
        setIsAuthenticated(true);
        setUsername(username);
        setToken(token);

        apiClient.interceptors.request.use((config) =>{
          config.headers.Authorization= token;
          return config;
        });

        return true;
      } else {
        Logout();
        return false;
      }
    } catch (error) {
      Logout();
      return false;
    }
  }
  function Logout() {
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, Logout, Login, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
