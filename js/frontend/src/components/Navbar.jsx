import { Link } from "react-router-dom";
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
        type="button"
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
            <a href="points">Eco Points</a>
          </li>
          <li>
            <a href="/picture">Scan</a>
          </li>
          {user ? (
            <li>
              <Link to="/" onClick={handleLogout}>
                Se déconnecter
              </Link>
            </li>
          ) : (
            <>
              <li>
                <a href="/loginuser">Se connecter</a>
              </li>
              <li>
                <a href="/register">S'inscrire</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
