import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProduct(data);
      console.log(data, "data");
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {product.map((value) => (
        <div className="product" key={value.id}>
          <img src={value.image} alt="alternative" />
          <h2>{value.title}</h2>
          <p>
            <span className="price">{value.price}</span>
          </p>
          <Link to={`/product/${value.id}`}>
            <button>product details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
