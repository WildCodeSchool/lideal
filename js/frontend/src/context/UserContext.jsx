import { createContext, useContext, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDataContext } from "./DataContext";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { apiService } = useDataContext();
  const navigate = useNavigate();
  const [connect, setConnect] = useState(false);
  const givenData = useLoaderData();
  const [user, setUser] = useState(givenData?.preloadUser?.data);

  const register = async (formData) => {
    try {
      setUser(
        await apiService.post("http://localhost:3310/api/users/", formData)
      );
      alert(`Bienvenu ${formData.firstname}, ton inscription est validée`);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handlelogout = async () => {
    await setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const contextValue = useMemo(
    () => ({
      connect,
      setConnect,
      register,
      user,
      handlelogout,
    }),
    [connect]
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
