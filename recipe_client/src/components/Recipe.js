import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = () => {
    const { categoryId } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes')
            .then(response => {
                setRecipes(response.data.filter(recipe => recipe.category === parseInt(categoryId)));
                console.log(response.data);
            })
            .catch(error => console.error(error));    
    }, [categoryId]);

    return (
        <div className='div'>
            <h1 className="h1">Recipes für category: {categoryId}</h1>
            <ul className="ul">
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <h3 className="h3">{recipe.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;
