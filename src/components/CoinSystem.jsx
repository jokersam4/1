import React, { useState } from 'react';

function CoinSystem() {
  const [credits, setCredits] = useState(0);

  // Function to add credits when buying a pack
  const buyPack = () => {
    setCredits(prevCredits => prevCredits + 1); // Increase by 1 credit
    if (credits % 5 === 0) {
      setCredits(prevCredits => prevCredits + 4); // If multiple of 5, add 4 more credits
    }
  };

  // Function to deduct credits when buying an item
  const buyItem = () => {
    if (credits > 0) {
      setCredits(prevCredits => prevCredits - 1); // Deduct 1 credit
      // Additional logic for buying the item goes here
    } else {
      alert('Insufficient credits');
    }
  };

  return (
    <div>
      <h1>Coin System</h1>
      <p>Credits: {credits}</p>
      <button onClick={buyPack}>Buy Pack</button>
      <button onClick={buyItem}>Buy Something</button>
    </div>
  );
}

export default CoinSystem;
