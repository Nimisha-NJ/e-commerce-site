import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { getAllProductId } from "../../ApiService/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getAllProductId(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleButton = () => {
    window.confirm("This product is out of stock");
  };

  return (
    <div className="product-details-container">
      <img src={product.image} alt="imagee" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="buy-now-button" onClick={handleButton}>
          Buy Now
        </button>
        <Link to={"/"}>
          <button className="go-back-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
