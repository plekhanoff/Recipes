import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/category/:categoryId" element={< Recipe />} />
                <Route path="/recipes/:recipeId" element={< RecipeDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
