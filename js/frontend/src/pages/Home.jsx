import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconePhoto from "../assets/iconePictureBlack.svg";

function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    if (isUserLoggedIn) {
      navigate("/picture");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="d-flex d-flex-column bg-black">
      <div className="home-card-title">
        <h1 className="home-title">L'idéal de </h1>
        <img src="./src/assets/loreal-logos-idZWwLS3l4.svg" id="logo" />
      </div>
      <div className="description">
        <h2>En quelques mots...</h2>
        <p>
          {" "}
          Découvrez une toute nouvelle façon de vivre l'expérience L'Oréal avec
          nL'idéal de L'Oréal. En cumulant des points à chaque achat dans l'un
          de nos point de vos produits préférés, vous ouvrez la porte à des
          réductions exclusives sur vos futurs achats en ligne.
        </p>
        <p>
          L'Idéal Team croit en la beauté avec un but. Une partie des points que
          vous cumulez sera reversée à des œuvres caritatives sélectionnées par
          L'Oréal. Ainsi, chaque achat contribue à rendre le monde plus beau, à
          l'intérieur comme à l'extérieur.
        </p>
      </div>
      <div className="def bg-white">
        <h2>Comment ça marche?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          odio similique, earum dolorum, explicabo corporis eius, culpa sapiente
          dolorem enim aut qui eaque nobis consequuntur nemo eveniet ullam
          temporibus!
        </p>
        <h2>Avantages L'Idéal</h2>
        <ul>
          <ol>
            Accès anticipé aux nouvelles collections et lancements de produits.
          </ol>
          <ol>Suivi en temps réel de vos points et avantages. </ol>
          <ol>Suggestions personnalisées de produits.</ol>
          <ol>Localisation des points de vente les plus proches</ol>
        </ul>
      </div>
      <div className="logo-picture">
        <img src={iconePhoto} alt="iconePhoto" onClick={handleIconClick} />
      </div>
    </div>
  );
}

export default Home;
