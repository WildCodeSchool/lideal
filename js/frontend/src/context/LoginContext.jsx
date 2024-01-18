import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiService from "../services/api.services";

const loginContext = createContext();

function LoginProvider({ children, apiService }) {
  const navigate = useNavigate();
  const givenData = useLoaderData();
  const [user, setUser] = useState(givenData?.preloadUser?.data);

  const login = useCallback(async (credentials) => {
    try {
      const data = await apiService.post("/api/login/", credentials);
      localStorage.setItem("token", data.token);

      apiService.setToken(data.token);

      const result = await apiService.get("/api/users/me");

      alert(`Coucou ${result.data.c_email}`);
      setUser(result.data);
      return navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
    return null;
  }, []);

  const context = useMemo(() => ({ login, user }), [login, user]);

  return (
    <loginContext.Provider value={context}>{children}</loginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default LoginProvider;
export const useLogin = () => useContext(loginContext);
