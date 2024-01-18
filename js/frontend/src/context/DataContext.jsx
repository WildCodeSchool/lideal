import React, { createContext, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import ApiService from "../services/api.services";

const DataContext = createContext();

function DataContextProvider({ children, apiService }) {
  const UsersArray = [
    {
      genre: "Madame",
      firstname: "Jeanne",
      lastname: "Montreux",
      mail: "jeanne.montreux@gmail.com",
      tel: "06.22.33.44.55",
      date_birth: "25/05/1989",
    },
    {
      genre: "Madame",
      firstname: "Martine",
      lastname: "Alijot",
      mail: "martine.alijot@gmail.com",
      tel: "06.22.33.44.55",
      date_birth: "25/05/1979",
    },
    {
      genre: "Monsieur",
      firstname: "Hector",
      lastname: "Plaget",
      mail: "hector.plaget@gmail.com",
      tel: "06.22.33.44.55",
      date_birth: "25/07/1989",
    },
    {
      genre: "Monsieur",
      firstname: "Patrick",
      lastname: "Datinot",
      mail: "patrick.datinot@gmail.com",
      tel: "06.22.33.44.55",
      date_birth: "27/05/1969",
    },
  ];
  const FavProductsArray = [
    {
      img: "../src/assets/rouge.jpg",
      title: "Rouge à lèvres, n°3",
      price: "25,00€",
    },
    {
      img: "../src/assets/correcteur.jpg",
      title: "Anti-cernes, n°2",
      price: "35,00€",
    },
    {
      img: "../src/assets/creme-main.jpg",
      title: "Crème pour les mains",
      price: "10,00€",
    },
    {
      img: "../src/assets/gel-douche.jpg",
      title: "Gel douche, peaux sensibles",
      price: "28,00€",
    },
  ];

  const PlacesArray = [
    {
      title: "Pharmacie du centre",
      address: "25 cours de la Marne - 33000 Bordeaux",
      tel: "05.21.25.36.87",
    },
    {
      title: "Coiffeur Coupe-Tif",
      address: "56 cours Georges Clemenceau - 33000 Bordeaux",
      tel: "05.11.48.56.36",
    },
    {
      title: "Pharmacie Maritime",
      address: "46 Cours Edouard Vaillant - 33300 Bordeaux",
      tel: "05.14.24.67.23",
    },
    {
      title: "Jacques Dessange",
      address: "25 rue de la petite place - 33000 Bordeaux",
      tel: "05.47.58.69.84",
    },
  ];

  const values = useMemo(
    () => ({ UsersArray, FavProductsArray, PlacesArray, apiService }),
    [UsersArray, FavProductsArray, PlacesArray, apiService]
  );
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

DataContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default DataContextProvider;

export const useDataContext = () => useContext(DataContext);
