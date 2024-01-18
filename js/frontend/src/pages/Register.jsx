import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

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
    <div className="contain">
      <h1>Insciption</h1>
      <div className="d-flex d-flex-column d-flex-center">
        <form onSubmit={handleSubmit} className="w-100">
          <label htmlFor="firstname" className="d-block mb-10">
            Prénom
          </label>
          <input
            value={formData.firstname}
            type="text"
            name="firstname"
            className="d-block mb-20"
            onChange={(e) => updateUser("firstname", e.target.value)}
          />
          <label htmlFor="lastname" className="d-block mb-10">
            Nom
          </label>
          <input
            value={formData.lastname}
            type="text"
            name="lastname"
            className="d-block mb-20"
            onChange={(e) => updateUser("lastname", e.target.value)}
          />
          <label htmlFor="street" className="d-block mb-10">
            Adresse{" "}
          </label>
          <input
            value={formData.street}
            type="text"
            name="street"
            className="d-block mb-20"
            onChange={(e) => updateUser("street", e.target.value)}
          />
          <label htmlFor="city" className="d-block mb-10">
            Ville
          </label>
          <input
            value={formData.city}
            type="text"
            name="city"
            className="d-block mb-20"
            onChange={(e) => updateUser("city", e.target.value)}
          />
          <label htmlFor="country" className="d-block mb-10">
            Pays
          </label>
          <input
            value={formData.country}
            type="text"
            name="country"
            className="d-block mb-20"
            onChange={(e) => updateUser("country", e.target.value)}
          />
          <label htmlFor="phone" className="d-block mb-10">
            Téléphone
          </label>
          <input
            value={formData.phone}
            type="text"
            name="phone"
            className="d-block mb-20"
            onChange={(e) => updateUser("phone", e.target.value)}
          />
          <label htmlFor="email" className="d-block mb-10">
            Email
          </label>
          <input
            value={formData.email}
            type="text"
            name="email"
            className="d-block mb-20"
            onChange={(e) => updateUser("email", e.target.value)}
          />
          <label htmlFor="password" className="d-block mb-10">
            Mot de passe
          </label>
          <input
            value={formData.password}
            type="text"
            name="password"
            className="d-block mb-20"
            onChange={(e) => updateUser("password", e.target.value)}
          />

          <button
            type="submit"
            className="button bg-white radius-10 mt-30 mb-20"
          >
            S'inscrire
          </button>
          <Link to="/loginuser">
            <p className="mb-20">
              Déjà inscrit ?<br />
              Connectez-vous ici.
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
