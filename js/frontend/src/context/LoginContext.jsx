import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDataContext } from "./DataContext";

const loginContext = createContext();

function LoginProvider({ children }) {
  const { apiService } = useDataContext();
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
      alert(
        `Content de vous revoir ${result.data.firstname} ${result.data.lastname}`
      );

      setUser(result.data);
      return navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion. Vérifiez vos identifiants.");
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
};

export default LoginProvider;
export const useLogin = () => useContext(loginContext);
