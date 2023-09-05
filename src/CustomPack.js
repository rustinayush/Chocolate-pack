import React, { useState } from "react";
import Chocolate from "./Chocolate";
import "./CustomPack.css";
const CustomPack = ({ chocolates }) => {
  const [selectedChocolates, setSelectedChocolates] = useState([]);
  const maxChocolates = 8;

  const addToPack = (chocolate) => {
    if (selectedChocolates.length < maxChocolates) {
      setSelectedChocolates([...selectedChocolates, chocolate]);
    }
  };

  const removeFromPack = (chocolate) => {
    const updatedPack = selectedChocolates.filter((c) => c !== chocolate);
    setSelectedChocolates(updatedPack);
  };

  const calculateTotalPrice = () => {
    return selectedChocolates.reduce((total, chocolate) => {
      return total + chocolate.price;
    }, 0);
  };

  return (
    <div className="custom-pack">
      <h2>Custom Chocolate Pack</h2>

      <div className="chocolate-list">
        {chocolates.map((chocolate) => (
          <Chocolate
            key={chocolate.id}
            chocolate={chocolate}
            onAddToPack={addToPack}
          />
        ))}
      </div>
      <div className="selected-chocolates">
        <h3>Selected Chocolates</h3>
        {selectedChocolates.map((chocolate) => (
          <div key={chocolate.id} className="selected-chocolate">
            <span>{chocolate.name}</span>
            <span>Price: ${chocolate.price}</span>
            <button onClick={() => removeFromPack(chocolate)}>Remove</button>
          </div>
        ))}
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default CustomPack;
