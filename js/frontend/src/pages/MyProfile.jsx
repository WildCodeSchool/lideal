import React, { useState } from "react";

export default function MyProfile() {
  // Récupérer les données depuis le localStorage
  const storedUserData = JSON.parse(localStorage.getItem("users")) || [];
  const userData = storedUserData.length > 0 ? storedUserData[0] : null;
  const [openDiagnostic, setOpenDiagnostic] = useState(false);

  if (!userData) {
    return <div>Aucune donnée utilisateur trouvée.</div>;
  }

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
    <div>
      <h1>Mon Profil</h1>
      <div>
        <p>
          <strong>Prénom:</strong> {userData.firstName}
        </p>
        <p>
          <strong>Nom:</strong> {userData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>Date de naissance:</strong> {userData.dtn}
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
            <label htmlFor="typePeau">Type de Peau :</label>
            <select
              id="typePeau"
              name="typePeau"
              value={formData.typePeau}
              onChange={handleSelectChange}
            >
              <option value="normale">Normale</option>
              <option value="seche">Sèche</option>
              <option value="grasse">Grasse</option>
              <option value="mixte">Mixte</option>
              <option value="sensible">Sensible</option>
            </select>
            <label htmlFor="problemePeau">Problème de Peau :</label>
            <select
              id="problemePeau"
              name="problemePeau"
              value={formData.problemePeau}
              onChange={handleSelectChange}
            >
              <option value="acne">Acné</option>
              <option value="secheresse">Sécheresse</option>
              <option value="sensibilite">Sensibilité</option>
              <option value="rides">Rides</option>
              <option value="autre">Autre</option>
            </select>
            <label htmlFor="typeCheveux">Type de Cheveux :</label>
            <select
              id="typeCheveux"
              name="typeCheveux"
              value={formData.typeCheveux}
              onChange={handleSelectChange}
            >
              <option value="boucles">Bouclés</option>
              <option value="ondules">Ondulés</option>
              <option value="raides">Raides</option>
              <option value="crepus">Crépus</option>
              <option value="autre">Autre</option>
            </select>
          </form>
        </>
      )}
    </div>
  );
}
