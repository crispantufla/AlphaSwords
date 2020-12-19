import React from 'react';
import CategoryList from './components/CategoryList';
import './NewHome.css';

const NewHome = () => {
    
    return(
        <div className="NewHome">
            <h1>Categorias</h1>
            <div><CategoryList></CategoryList></div>
        </div>
    )
}

export default NewHome;