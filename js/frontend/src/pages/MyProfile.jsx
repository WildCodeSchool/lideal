import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

export default function MyProfile() {
  const { apiService } = useDataContext();
  const [getProfile, setGetProfile] = useState({});
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/users/me"
        );

        setGetProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUserProfile();
  }, []);
  // Récupérer les données depuis le localStorage
  // const storedUserData = JSON.parse(localStorage.getItem("users")) || [];
  // const userData = storedUserData.length > 0 ? storedUserData[0] : null;
  const [openDiagnostic, setOpenDiagnostic] = useState(false);

  // if (!userData) {
  //   return <div>Aucune donnée utilisateur trouvée.</div>;
  // }

  const handleClick = () => {
    setOpenDiagnostic(true);
  };

  const [formData, setFormData] = useState({
    typePeau: "",
    problemePeau: "",
    typeCheveux: "",
  });
  const handleSelectChange = (e) => {
    // Mettre à jour le state lorsque l'utilisateur sélectionne une option
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       // Envoyer les données au serveur
  //       const response = await fetch("http://exemple.com/api/profile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         // Traitement en cas de succès
  //         console.log("Données soumises avec succès !");
  //       } else {
  //         // Traitement en cas d'erreur
  //         console.error("Erreur lors de la soumission des données.");
  //       }
  //     } catch (error) {
  //       console.error("Erreur lors de la requête fetch :", error);
  //     }
  //   };

  return (
    <div className="bg-white">
      <h1>Mon Profil</h1>
      <div>
        <p>
          <strong>Prénom:</strong> {getProfile.firstname}
        </p>
        <p>
          <strong>Nom:</strong> {getProfile.lastname}
        </p>
        <p>
          <strong>Rue:</strong> {getProfile.street}
        </p>
        <p>
          <strong>Ville:</strong> {getProfile.city}
        </p>
        <p>
          <strong>Pays:</strong> {getProfile.country}
        </p>
        <p>
          <strong>Telephone:</strong> {getProfile.phone}
        </p>
        <p>
          <strong>Email:</strong> {getProfile.email}
        </p>
      </div>
      <button type="submit" onClick={handleClick}>
        Optimiser mon profil pour obtenir des suggestions personnalisées
      </button>
      {openDiagnostic && (
        <>
          <p>
            Parce que vous méritez le meilleur, nos équipes vous offrent des
            soins exceptionnels, parfaitement adaptés à vos besoins uniques.{" "}
            <br />
            Découvrez une expérience de soin sur mesure, conçue exclusivement
            pour vous
          </p>
          <form action="POST">
            <label htmlFor="colorEye">Couleur des yeux :</label>
            <select
              id="colorEye"
              name="colorEye"
              value={formData.colorEye}
              onChange={handleSelectChange}
            >
              <option value="Bleu">Bleu</option>
              <option value="Marron">Marron</option>
              <option value="Gris">Gris</option>
              <option value="Vert">Vert</option>
              <option value="Noisette">Noisette</option>
            </select>
            <label htmlFor="colorPeau">Nuance de Peau :</label>
            <select
              id="colorPeau"
              name="colorPeau"
              value={formData.colorPeau}
              onChange={handleSelectChange}
            >
              <option value="Claire">Claire</option>
              <option value="Dorée">Dorée</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Foncée">Foncée</option>
              <option value="Ebène">Ebène</option>
            </select>
            <label htmlFor="typePeau">Type de Peau :</label>
            <select
              id="typePeau"
              name="typePeau"
              value={formData.typePeau}
              onChange={handleSelectChange}
            >
              <option value="Mature">Mature</option>
              <option value="Sensible">Sensible</option>
              <option value="Acnéique">Acnéique</option>
              <option value="Grasse">Grasse</option>
              <option value="Sèche">Sèche</option>
            </select>
            <label htmlFor="typeHair">Type de Cheveux :</label>
            <select
              id="typeHair"
              name="typeHair"
              value={formData.typeHair}
              onChange={handleSelectChange}
            >
              <option value="Raide">Raide</option>
              <option value="Crépus">Crépus</option>
              <option value="Ondulés">Ondulés</option>
              <option value="Frisés">Frisés</option>
            </select>
            <label htmlFor="sizeHair">Longueur de Cheveux :</label>
            <select
              id="sizeHair"
              name="sizeHair"
              value={formData.sizeHair}
              onChange={handleSelectChange}
            >
              <option value="Très court">Très court</option>
              <option value="Court">Court</option>
              <option value="Mi-long">Mi-long</option>
              <option value="Long">Long</option>
            </select>
            <label htmlFor="colorHair">Couleur de Cheveux :</label>
            <select
              id="colorHair"
              name="colorHair"
              value={formData.colorHair}
              onChange={handleSelectChange}
            >
              <option value="Roux">Roux</option>
              <option value="Blonds">Blonds</option>
              <option value="Bruns">Bruns</option>
              <option value="Châtains">Châtains</option>
              <option value="Colorés">Colorés</option>
            </select>
          </form>
        </>
      )}
    </div>
  );
}
