import React from "react";
import "./Points.scss";

function Points() {
  /* const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/structure");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setProductData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataProduct();
  }, []); */

  const products = [
    {
      id: 1,
      name: "beaume",
      img: "./src/assets/lorealproduct.jpg",
      price: "15euros",
    },
    {
      id: 2,
      name: "rouge",
      img: "./src/assets/lorealproduct.jpg",
      price: "10euros",
    },
    {
      id: 3,
      name: "creme",
      img: "./src/assets/lorealproduct.jpg",
      price: "30euros",
    },
  ];

  return (
    <div className="point-container">
      <div className="point-part">
        <h1>Mes points</h1>
        <h2 className="points">100 points</h2>
      </div>
      <div className="favorite-part">
        <h2>Mes produits favoris</h2>
        <div className="line-product">
          {products.map((data) => (
            <div key={data.id}>
              <img src={data.img} alt="product" />
              <h4>{data.name}</h4>
              <h4>{data.price}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="shop">
        <h2>Mes points de ventes locaux</h2>
      </div>
      <div className="reduc">
        <h2>Mes offres</h2>
        <div className="line-offer">
          <img src="./src/assets/reduc.png" alt="reduc" />
          <h3>Pour 100 Points</h3>
        </div>
        <button type="button">Générer mon code</button>
      </div>
    </div>
  );
}

export default Points;
