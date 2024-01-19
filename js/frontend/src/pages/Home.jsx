import React from "react";
import { useNavigate } from "react-router-dom";
import iconePhoto from "../assets/iconePictureBlack.svg";
import { useUserContext } from "../context/UserContext";

function Home() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const handleIconClick = () => {
    if (user) {
      navigate("/picture");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="bg-white">
      <div className="img-max">
        <img alt="L'Oreal Paris" src="./src/assets/1_banner.jpg" />
      </div>
      <div className="bg-black pt-10 pb-10 mb-20 mt-bk">
        <h1 className="home-title">L'idéal de L'Oréal</h1>
      </div>
      <div className="home-card-title contain t-center mb-30">
        <h2 className="mb-10">"Feel green, Feel beauty</h2>
        <h2>Soyez l'Idéal de L'Oréal"</h2>
      </div>
      <div className="video-max">
        <video muted autoPlay loop>
          <source src="./src/assets/home-video.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la balise vidéo.
        </video>
      </div>
      <div className="contain bg-black pb-20 pt-20 mb-20 mt-bk">
        <h2>En quelques mots...</h2>
      </div>
      <div className="contain">
        <p className="mb-30">
          L'Idéal Team vous propose une toute nouvelle façon de vivre
          l'expérience L'Oréal avec "L'idéal de L'Oréal". Cumulez nos Eco
          Points, et réduisez votre impact environnemental en vous faisant
          livrer vos produits préférés L'Oréal dans vos points de vente à côté
          de chez vous.
        </p>
        <p className="mb-30">
          La réduction de l'empreinte carbone est l'une de nos missions
          principales, et ensemble, nous avons la certitude d'aller encore plus
          loin vers nos valeurs communes. En cumulant nos Eco points, vous
          faites, non seulement un geste responsable pour la planète, mais vous
          vous ouvrez aussi la porte à des réductions exclusives sur vos futurs
          achats en ligne!
        </p>
      </div>
      <div className="img-max has-three-children">
        <img alt="L'Oreal Paris" src="./src/assets/home-1.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-3.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-2.jpg" />
      </div>
      <div className="pt-10 pb-20 bg-black mb-20">
        <div className="contain">
          <h2 className="mt-10">Comment ça marche?</h2>
        </div>
      </div>
      <div className="contain">
        <h2 className="mb-10 mt-10">Première connexion</h2>
        <ol className="mb-30">
          <li className="mb-10">
            1. Créez-vous un compte avec un cadeau de 100 points
          </li>
          <li className="mb-10">2. Accédez à vos Eco Points</li>
          <li className="mb-10">3. Génerez votre code réduction</li>
          <li className="mb-10">
            <a href="https://www.loreal-paris.fr/" target="_blank">
              4. Allez sur le site loreal-paris.fr/ pour profiter de vos points
            </a>
          </li>
          <li className="mb-10">
            5. Choisissez votre point de retrait le plus proche de chez vous
          </li>
        </ol>
      </div>
      <hr />
      <div className="contain mt-20">
        <h2 className="mt-10 mb-20">Prochaines connexions</h2>
        <ol className="mb-30">
          <li className="mb-10">
            1. Scannez votre ticket de caisse aprés vos achats L'Oréal en points
            de vente (salons, boutiques cosmétiques, pharmacies, grandes
            distributions)
          </li>
          <li className="mb-10">
            2. Consultez de solde de vos Eco Points réactualisés
          </li>
          <li className="mb-10">3. Génerez votre code réduction</li>
          <li className="mb-10">
            <a href="https://www.loreal-paris.fr/" target="_blank">
              4. Allez sur le site loreal-paris.fr/ pour profiter de vos points
            </a>
          </li>
          <li className="mb-10">
            5. Choisissez votre point de retrait le plus proche de chez vous
          </li>
        </ol>
      </div>
      <hr />
      <div className="contain mt-20">
        <h2 className="mt-10 mb-20">Avantages L'Idéal</h2>
        <ul className="point-list mb-30">
          <li className="mb-10">
            Accès anticipé aux nouvelles collections et lancements de produits.
          </li>
          <li className="mb-10">
            Suivi en temps réel de vos points et avantages.{" "}
          </li>
          <li className="mb-10">Suggestions personnalisées de produits.</li>
          <li className="mb-10">
            Localisation des points de vente les plus proches
          </li>
        </ul>
      </div>
      <div className="img-max has-three-children mb-60">
        <img alt="L'Oreal Paris" src="./src/assets/home-4.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-5.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-6.jpg" />
      </div>
      <div className="logo-picture d-flex bg-black d-flex-center pt-20 pb-20">
        <div className="bg-white radius">
          <img src={iconePhoto} alt="iconePhoto" onClick={handleIconClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;
