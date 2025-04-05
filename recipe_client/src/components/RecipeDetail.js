import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${recipeId}`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => console.error(error));
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="div">
            <h1 className="h1">{recipe.title}</h1>
            <p className="p">{recipe.description}</p>
        </div>
    );
};

export default RecipeDetail;
