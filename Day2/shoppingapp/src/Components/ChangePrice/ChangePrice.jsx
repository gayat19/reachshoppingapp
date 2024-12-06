import React, { useState, useRef } from 'react';
import { interval } from 'rxjs';

const ChangePrice = () => {
  const [price, setPrice] = useState(100); // Initial price
  const subscriptionRef = useRef(null); // Ref to store subscription

  // Function to start subscription
  const startUpdates = () => {
    if (subscriptionRef.current) return; // Prevent multiple subscriptions

    const priceObservable = interval(1000); // Emit every second
    subscriptionRef.current = priceObservable.subscribe(() => {
      setPrice((prevPrice) => prevPrice + 1); // Random price fluctuation
    });
  };

  // Function to stop subscription
  const stopUpdates = () => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe(); // Unsubscribe from observable
      subscriptionRef.current = null; // Reset subscription ref
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Price Updater</h1>
      <p>Current Price: <strong>${price}</strong></p>
      <button onClick={startUpdates} style={{ marginRight: '10px' }}>
        Start Updates
      </button>
      <button onClick={stopUpdates}>
        Stop Updates
      </button>
    </div>
  );
};

export default ChangePrice;
