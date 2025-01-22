// 

// App.js

import product1 from "./assets/images/shoes11.jpeg";
import product2 from "./assets/images/shoes6.jpeg";
import product3 from "./assets/images/shoes13.jpeg";
import product4 from "./assets/images/shoes1.jpeg";
import product5 from "./assets/images/shoes15.jpeg";
import product6 from "./assets/images/shoes16.jpeg";
import product7 from "./assets/images/shoes17.jpeg";
import product8 from "./assets/images/shoes18.jpeg";
import product9 from "./assets/images/shoes19.jpeg";
import product10 from "./assets/images/shoes2.jpeg";


import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Product 1", price: "$10", image: product1},
  { id: 2, name: "Product 2", price: "$20", image: product2 },
  { id: 3, name: "Product 3", price: "$30", image: product3 },
  { id: 4, name: "Product 4", price: "$40", image: product4 },
  { id: 5, name: "Product 5", price: "$50", image: product5 },
  { id: 6, name: "Product 6", price: "$10", image: product6},
  { id: 7, name: "Product 7", price: "$20", image: product7 },
  { id: 8, name: "Product 8", price: "$30", image: product8 },
  { id: 9, name: "Product 9", price: "$40", image: product9 },
  { id: 10, name: "Product 10", price: "$50", image: product10 },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">

<nav className="navbar">
        <div className="navbar-container">
         
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <h1>Product Gallery</h1>
      <div className="gallery">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}



export default App;
