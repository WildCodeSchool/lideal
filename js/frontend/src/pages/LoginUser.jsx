import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";

function LoginUser() {
  return (
    <div>
      <h1>Connexion</h1>
      <div>
        <form action="GET">
          <label htmlFor="identifiant">Identifiant</label>
          <input type="text" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" />
        </form>
      </div>
      <Button>Valider </Button>
      <Link to="/connexion">
        <p className="mb-10">
          Vous n'avez pas de compte ?<br />
          Inscrivez-vous ici.
        </p>
      </Link>
    </div>
  );
}

export default LoginUser;
