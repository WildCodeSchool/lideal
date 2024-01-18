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
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/myprofile">Profil</a>
          </li>
          <li>
            <a href="points">Green Points</a>
          </li>
          <li>
            <a href="/picture">Scan</a>
          </li>
          <li>
            <a href="/loginuser">Connexion</a>
          </li>
          <li>
            <a href="/register">Inscription</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
