// src/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Section from "./main";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        setBreeds(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Section />
      <div className="search" id="Dogs">
        <input
          type="text"
          placeholder="Search by breed name"
          value={searchTerm}
          className="search-input"
          onChange={handleSearchChange}
        />
        <div class="search-icon">
          <span className="btn">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "#acacac" }}
            ></i>
          </span>
        </div>
      </div>
      <div className="cards-container">
        {filteredBreeds.map((breed) => (
          <div
            className="card"
            key={breed.id}
            onClick={() => navigate(`/dog/${breed.name}`, { state: { breed } })}
          >
            {breed.reference_image_id && (
              <img
                src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                alt={breed.name}
              />
            )}
            <div className="card-content">
              <h2>{breed.name}</h2>
              <p>{breed.temperament}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
