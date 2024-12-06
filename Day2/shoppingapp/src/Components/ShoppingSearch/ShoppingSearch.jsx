import React, { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import axios from 'axios';

const ShoppingSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get the input element
    const searchInput = document.getElementById('searchInput');

    // Create an observable from the input events
    const search = fromEvent(searchInput, 'input').pipe(
      map((event) => event.target.value),        // Get the input value
      debounceTime(500),                        // Wait for 500ms pause in events
      distinctUntilChanged(),                   // Only process if the value changed
      switchMap((query) => searchProducts(query)) // Cancel previous API call if new value comes
    );

    // Subscribe to the observable
    const subscription = search.subscribe({
      next: (results) => setSearchResults(results), // Update results
      error: (err) => console.error('Error:', err),
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  // Simulated API call to fetch products
  const searchProducts = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return [];
    }

    setLoading(true);
    try {
      // Replace with your API endpoint
      const response = await axios.get(`https://fakestoreapi.com/products?q=${query}`);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error('API Error:', error);
      return [];
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping App</h1>
      <input
        id="searchInput"
        type="text"
        placeholder="Search for products..."
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingSearch;
