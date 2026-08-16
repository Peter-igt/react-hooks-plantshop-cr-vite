import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [inStock, setInStock] = useState(true);

  function handleToggle() {
    const next = !inStock;
    setInStock(next);
    if (onUpdatePlant) {
      onUpdatePlant({ ...plant, inStock: next });
    }
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;