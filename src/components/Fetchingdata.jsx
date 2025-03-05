import React, { useEffect, useState } from "react";
import "../styles/FetchingData.css";


const FetchingData = () => {
  const API = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]); // Store API data
  const [loading, setLoading] = useState(true); // Store loading state

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data); // Save 'hits' array to state
      setLoading(false); // Set loading state to false
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div className="container">
      <h1>Fetching Data</h1>
      <p>Fetched data from API:</p>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="item-container">
          {items.map((item) => (
            <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-info">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-category">{item.category}</p>
              <p className="item-price">${item.price}</p>
              <p className="item-description">{item.description.substring(0,80)}...</p>
              <div className="rating">
                ⭐ {item.rating.rate} / 5 ({item.rating.count} reviews)
              </div>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );  
};

export default FetchingData;
