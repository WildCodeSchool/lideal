import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiService from "../services/api.services";

const loginContext = createContext();

function LoginProvider({ children, apiService }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const data = await apiService.post(
        "http://localhost:3310/api/login",
        formValue
      );
      localStorage.setItem("token", data.token);
      apiService.setToken(data.token);
      const result = await apiService.get("http://localhost:3310/api/users/me");
      setUser(result.data); // You may want to set the user to a default value or null here
      return navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
    return null;
  };

  const context = useMemo(
    () => ({ login, user, setFormValue, formValue }),
    [login, user]
  );

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
