import React from "react";
import "./home.scss";
import iconePhoto from "../assets/iconePictureBlack.svg";

function Home() {
  return (
    <div className="home-container bg-black">
      <div className="description">
        <h1>L'ideal de l'Oreal</h1>
        <h2>En quelques mots...</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          odio similique, earum dolorum, explicabo corporis eius, culpa sapiente
          dolorem enim aut qui eaque nobis consequuntur nemo eveniet ullam
          temporibus! In facilis voluptates temporibus cupiditate dolor
          dignissimos soluta. Corporis dolores hic fuga fugiat modi dignissimos.
          Dolorem ea vitae illo, perspiciatis soluta sequi omnis facere
          excepturi repellat reiciendis recusandae porro consequatur aliquam!
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
      </div>
      <div className="logo-picture">
        <img src={iconePhoto} alt="iconePhoto" />
      </div>
    </div>
  );
}

export default Home;
