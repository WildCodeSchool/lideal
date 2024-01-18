import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function Register() {
  const { register } = useUserContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
    dtn: "",
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
        <label htmlFor="firstName">Prénom</label>
        <input
          value={formData.firstName}
          type="text"
          name="firstName"
          onChange={(e) => updateUser("firstName", e.target.value)}
        />
        <label htmlFor="lastName">Nom</label>
        <input
          value={formData.lastName}
          type="text"
          name="lastName"
          onChange={(e) => updateUser("lastName", e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          value={formData.password}
          type="text"
          name="password"
          onChange={(e) => updateUser("password", e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <label htmlFor="password">Confirmation mot de passe</label>
        <input
          value={formData.password}
          type="text"
          name="password"
          onChange={(e) => updateUser("passeword", e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          type="text"
          name="email"
          onChange={(e) => updateUser("email", e.target.value)}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <label htmlFor="email">Confirmation Email</label>
        <input
          value={formData.email}
          type="text"
          name="email"
          onChange={(e) => updateUser("email", e.target.value)}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          value={formData.phone}
          type="tel"
          name="phone"
          onChange={(e) => updateUser("phone", e.target.value)}
        />
        <label htmlFor="dtn">Date de naissance</label>
        <input
          value={formData.dtn}
          type="date"
          name="dtn"
          onChange={(e) => updateUser("dtn", e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}
