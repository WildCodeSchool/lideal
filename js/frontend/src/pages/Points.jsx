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
      img: "./src/assets/correcteur.jpg",
      price: "10euros",
    },
    {
      id: 3,
      name: "creme",
      img: "./src/assets/creme-main.jpg",
      price: "30euros",
    },
    {
      id: 4,
      name: "pipe",
      img: "./src/assets/lorealproduct.jpg",
      price: "50euros",
    },
    {
      id: 5,
      name: "creamy",
      img: "./src/assets/lorealproduct.jpg",
      price: "30euros",
    },
  ];

  const shops = [
    {
      id: 1,
      name: "Salon de coiffure Hitl'hair",
      img: "./src/assets/coiffure.jpeg",
    },
    {
      id: 2,
      name: "Salon de manucure ongle ben",
      img: "./src/assets/manucure.jpeg",
    },
    {
      id: 3,
      name: "Pharma Syrie",
      img: "./src/assets/pharmacie.jpeg",
    },
    {
      id: 4,
      name: "Aero Gros porc",
      img: "./src/assets/lorealproduct.jpg",
    },
    {
      id: 5,
      name: "Parfumeriz basmati",
      img: "./src/assets/lorealproduct.jpg",
    },
  ];

  return (
    <div className="point-container">
      <div className="point-part container-max t-center bg-black">
        <div className="contain">
          <div className="d-flex d-flex-center">
            <div>
              <h1 className="mb-20">Mes points</h1>
              <h2 className="bg-white radius-10 mb-20 points">100 points</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="favorite-part bg-white border-10">
        <div className="contain">
          <h2>Mes produits favoris</h2>
          <div className="horizontal-scroll has-little-cards line-product">
            {products.map((data) => (
              <div
                className="card product-card d-flex d-flex-space-between d-flex-column bg-black radius-10"
                key={data.id}
              >
                <img src={data.img} alt="product" />
                <div>
                  <h4>{data.name}</h4>
                  <h4>{data.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shop bg-black contain">
        <h2>Mes points de ventes locaux</h2>
        <div className="horizontal-scroll has-big-cards line-product mt-20 mb-20">
          {shops.map((data) => (
            <div
              className="card shop-card d-flex d-flex-space-between d-flex-column bg-white radius-10"
              key={data.id}
            >
              <img src={data.img} alt="product" />
              <div>
                <h4>{data.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white reduc mb-30">
        <h2>Mes offres</h2>
        <div className="horizontal-scroll line-offer">
          <img src="./src/assets/reduc.png" alt="reduc" />
          <h3>Pour 100 Points</h3>
        </div>
        <button
          className="mi-auto radius-10 pb-10 bg-black mt-30"
          type="button"
        >
          Générer mon code
        </button>
      </div>
    </div>
  );
}

export default Points;
