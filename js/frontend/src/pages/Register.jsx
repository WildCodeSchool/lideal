import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function Register() {
  const { register } = useUserContext();

  const [formData, setFormData] = useState({
    c_firstname: "",
    c_lastname: "",
    c_address: "",
    c_city: "",
    c_country: "",
    c_phone: "",
    c_email: "",
    c_password: "",
  });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const updateUser = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // const saveUserToLocalStorage = () => {
  //   if (!localStorage.getItem("users")) {
  //     localStorage.setItem("users", JSON.stringify([]));
  //   }
  //   const users = JSON.parse(localStorage.getItem("users"));
  //   users.push(formData);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   return Navigate("/");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    register(formData);
  };

  return (
    <>
      <div>Insciption</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="c_firstname">Prénom</label>
        <input
          value={formData.c_firstname}
          type="text"
          name="c_firstname"
          onChange={(e) => updateUser("c_firstname", e.target.value)}
        />
        <label htmlFor="c_lastname">Nom</label>
        <input
          value={formData.c_lastname}
          type="text"
          name="c_lastname"
          onChange={(e) => updateUser("c_lastname", e.target.value)}
        />
        <label htmlFor="c_address">Adresse </label>
        <input
          value={formData.c_address}
          type="text"
          name="c_address"
          onChange={(e) => updateUser("c_address", e.target.value)}
        />
        <label htmlFor="c_city">Ville</label>
        <input
          value={formData.c_city}
          type="text"
          name="c_city"
          onChange={(e) => updateUser("c_city", e.target.value)}
        />
        <label htmlFor="c_country">Pays</label>
        <input
          value={formData.c_country}
          type="text"
          name="c_country"
          onChange={(e) => updateUser("c_country", e.target.value)}
        />
        <label htmlFor="c_phone">Téléphone</label>
        <input
          value={formData.c_phone}
          type="text"
          name="c_phone"
          onChange={(e) => updateUser("c_phone", e.target.value)}
        />
        <label htmlFor="c_email">Email</label>
        <input
          value={formData.c_email}
          type="text"
          name="c_email"
          onChange={(e) => updateUser("c_email", e.target.value)}
        />
        <label htmlFor="c_password">Mot de passe</label>
        <input
          value={formData.c_password}
          type="text"
          name="c_password"
          onChange={(e) => updateUser("c_password", e.target.value)}
        />

        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}
