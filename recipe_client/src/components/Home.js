import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(response => { setCategories(response.data)})
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='div'>
            <h1 className="h1">Lebensmittelkategorien:</h1>
            <ul className="ul">
                {categories.map(category => (
                    <li className="li" key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
