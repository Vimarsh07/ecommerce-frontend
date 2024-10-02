import React, { useState } from 'react';
import all_product from '../Assets/all_product.js';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const search = () => {
    if (searchTerm !== '') {
        const filteredProducts = all_product.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredProducts);
      } else {
        setResults([]);
      }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={search}>Search</button>
      {results.length === 0 && searchTerm !== '' && <p>No product found</p>}
      {results.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;