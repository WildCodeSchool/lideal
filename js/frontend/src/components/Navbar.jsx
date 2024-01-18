import { useState } from "react";

export default function () {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`navbar${navbar ? " active" : ""}`}>
      <img src="./src/assets/loreal-logos-idZWwLS3l4.svg" id="logo" />
      <button
        onClick={() => setNavbar(!navbar)}
        className={`burger-button${navbar ? " active" : ""}`}
      >
        <span></span>
      </button>
      <div className="burger-menu">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Green Points</li>
          <li>Scan</li>
          <li>Connexion</li>
          <li>Inscription</li>
        </ul>
      </div>
    </div>
  );
}
