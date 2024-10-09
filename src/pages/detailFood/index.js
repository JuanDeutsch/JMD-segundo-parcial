import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchMealById } from "../../services/mealtService";
import "./index.css";

const DetailFood = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        const response = await FetchMealById(idMeal);
        setMeal(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMeal();
  }, [idMeal]);

  return (
    <>
      {!loading && meal && (
        <div className="container">
          <div className="background">
            <div
              id="image"
              style={{
                backgroundImage: `url(${meal.strMealThumb})`, 
              }}
            >
            </div>
            <div className="nametype">
              <div className="name">
                <h1>{meal.strMeal}</h1>
                <h2>{meal.strCategory}</h2>
              </div>
              <div className="info">
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <p>Cargando...</p>}
      <Link to="/" className="back-button">Volver</Link>
    </>
  );
};

export default DetailFood;