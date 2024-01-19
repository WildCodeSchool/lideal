import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

export default function MyProfile() {
  const { apiService } = useDataContext();
  const [getProfile, setGetProfile] = useState({});
  const [openDiagnostic, setOpenDiagnostic] = useState(false);
  const [formData, setFormData] = useState({
    colorEye: "",
    colorPeau: "",
    typePeau: "",
    typeHair: "",
    sizeHair: "",
    colorHair: "",
  });

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
  }, [apiService]);

  const handleClick = () => {
    setOpenDiagnostic(true);
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="mbl-0 mb-20 mt-bk pt-20 pb-20 bg-white">Mon Profil</h1>
      <div className="contain bg-black">
        <div className="d-flex d-flex-column d-flex-center mb-30">
          <div className="profile w-100">
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
        </div>
      </div>
      <div className="img-max has-three-children mb-20">
        <img alt="L'Oreal Paris" src="./src/assets/home-4.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-5.jpg" />
        <img alt="L'Oreal Paris" src="./src/assets/home-6.jpg" />
      </div>
      <div className="contain profile">
        <button type="button" onClick={handleClick}>
          Optimiser mon profil pour obtenir des suggestions personnalisées
        </button>
        {openDiagnostic && (
          <>
            <h3 className="mb-20">
              Parce que vous méritez le meilleur, nos équipes vous offrent des
              soins exceptionnels, parfaitement adaptés à vos besoins uniques.
            </h3>
            <h3 className="mb-30">
              Découvrez une expérience de soin sur mesure, conçue exclusivement
              pour vous :
            </h3>
            <form action="POST" className="mb-30">
              <p className="mb-10">
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
              </p>
              <p className="mb-10">
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
              </p>
              <p className="mb-10">
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
              </p>
              <p className="mb-10">
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
              </p>

              <p className="mb-10">
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
              </p>
              <p className="mb-10">
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
              </p>
            </form>
          </>
        )}
      </div>
    </>
  );
}
