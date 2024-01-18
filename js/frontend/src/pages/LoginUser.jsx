import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "../components/Button";
import { useLogin } from "../context/LoginContext";

function LoginUser() {
  const { login } = useLogin();

  const [formValue, setFormValue] = useState({
    firstName: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValue);
  };

  return (
    <div className="d-flex d-flex-column ml-3 container">
      <h1>Connexion</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="labelLogin">
            Prénom :
          </label>
          <div className="inputLogin">
            <input
              value={formValue.firstName}
              name="firstName"
              type="text"
              id="inputLogin"
              onChange={onChange}
            />
          </div>
          <label htmlFor="password" className="labelLogin">
            Mot de passe :
          </label>
          <div className="inputLogin">
            <input
              value={formValue.password}
              name="password"
              type="password"
              id="inputLogin"
              onChange={onChange}
            />
          </div>
          <Button type="submit" className="mt-30">
            Valider
          </Button>
        </form>
      </div>
      <Link to="/register">
        <p className="mt-40">
          Vous n'avez pas de compte ?<br />
          Inscrivez-vous ici.
        </p>
      </Link>
    </div>
  );
}

export default LoginUser;
