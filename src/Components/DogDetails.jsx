import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./DogDetails.css";

const DogDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state?.breed) {
      setBreed(location.state.breed);
      setLoading(false);
    } else {
      const fetchBreeds = async () => {
        try {
          const response = await axios.get(
            "https://api.thedogapi.com/v1/breeds"
          );
          const breedData = response.data.find((breed) => breed.name === name);
          setBreed(breedData);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };

      fetchBreeds();
    }
  }, [name, location.state]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!breed) {
    return (
      <div>
        <p>No breed data available.</p>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  return (
    <div className="dog-details">
      <div className="container">
        <button onClick={() => navigate("/")} className="back-button">
          Back
        </button>
        <div className="left">
          {breed.reference_image_id && (
            <img
              src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
              alt={breed.name}
              className="main_image"
            />
          )}
        </div>
        <div className="right">
          <div>
            <h3 className="breed-name">{breed.name}</h3>
            <div className="breed-details">
              <p className="detail-item">
                <strong>Temperament:</strong> {breed.temperament}
              </p>
              <p className="detail-item">
                <strong>Bred for:</strong> {breed.bred_for}
              </p>
              <p className="detail-item">
                <strong>Breed group:</strong> {breed.breed_group}
              </p>
              <p className="detail-item">
                <strong>Life span:</strong> {breed.life_span}
              </p>
              <p className="detail-item">
                <strong>Origin:</strong> {breed.origin}
              </p>
              <p className="detail-item">
                <strong>Weight:</strong> {breed.weight.metric} kg (
                {breed.weight.imperial} lbs)
              </p>
              <p className="detail-item">
                <strong>Height:</strong> {breed.height.metric} cm (
                {breed.height.imperial} in)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
