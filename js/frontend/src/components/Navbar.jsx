import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user, handleLogout } = useUserContext();

  return (
    <div className={`navbar${navbar ? " active" : ""}`}>
      <img
        src="./src/assets/loreal-logos-idZWwLS3l4.svg"
        id="logo"
        alt="logo"
      />
      <button
        onClick={() => setNavbar(!navbar)}
        className={`burger-button${navbar ? " active" : ""}`}
        type="button"
      >
        {" "}
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
            <a href="points">Eco Points</a>
          </li>
          <li>
            <a href="/picture">Scan</a>
          </li>
          <li>
            <div className="btn-nav">
              {user ? (
                <div>
                  {/* <p>Bienvenue</p> */}
                  <button type="button" onClick={handleLogout}>
                    Se déconnecter
                  </button>
                </div>
              ) : (
                <>
                  <a href="/loginuser">
                    <span className="navbar-link">Se connecter</span>
                  </a>
                  <br />
                  <br />
                  <br />
                  <a href="/register">
                    <span className="navbar-link">S'inscrire</span>
                  </a>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
