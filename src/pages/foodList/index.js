import React from 'react';

import "./index.css";

import SearchBox from '../../components1/searchbox';
import FoodCard from '../../components1/foodCard';

import useFoods from "../../hooks/useFood";
import {useFoodContext} from '../../context/foodCtx';

const FoodList = () => {
    useFoods();
    const{
        meals,
        loading
    } = useFoodContext();
    console.log("Comidas lista", meals);

    return (
        <div className="App">
            <SearchBox />
            {loading && <span>Cargando...</span>}
            {!loading && 
                meals.map((meal) => (
                    <FoodCard key={meal.idMeal} meal={meal} />
                ))}
        </div>
    );
}

export default FoodList;