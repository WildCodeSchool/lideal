import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [connect, setConnect] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
    dtn: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updateUser = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveUserToLocalStorage = () => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    const users = JSON.parse(localStorage.getItem("users"));
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const contextValue = useMemo(
    () => ({
      formData,
      setFormData,
      handleChange,
      updateUser,
      saveUserToLocalStorage,
      connect,
      setConnect,
    }),
    [formData, setFormData, connect]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

export const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
