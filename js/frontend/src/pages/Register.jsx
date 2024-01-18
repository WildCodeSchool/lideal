import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function Register() {
  const { register } = useUserContext();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    password: "",
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
        <label htmlFor="firstname">Prénom</label>
        <input
          value={formData.firstname}
          type="text"
          name="firstname"
          onChange={(e) => updateUser("firstname", e.target.value)}
        />
        <label htmlFor="lastname">Nom</label>
        <input
          value={formData.lastname}
          type="text"
          name="lastname"
          onChange={(e) => updateUser("lastname", e.target.value)}
        />
        <label htmlFor="street">Adresse </label>
        <input
          value={formData.street}
          type="text"
          name="street"
          onChange={(e) => updateUser("street", e.target.value)}
        />
        <label htmlFor="city">Ville</label>
        <input
          value={formData.city}
          type="text"
          name="city"
          onChange={(e) => updateUser("city", e.target.value)}
        />
        <label htmlFor="country">Pays</label>
        <input
          value={formData.country}
          type="text"
          name="country"
          onChange={(e) => updateUser("country", e.target.value)}
        />
        <label htmlFor="phone">Téléphone</label>
        <input
          value={formData.phone}
          type="text"
          name="phone"
          onChange={(e) => updateUser("phone", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          type="text"
          name="email"
          onChange={(e) => updateUser("email", e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          value={formData.password}
          type="text"
          name="password"
          onChange={(e) => updateUser("password", e.target.value)}
        />

        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}
