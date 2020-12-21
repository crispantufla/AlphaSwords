import React from 'react';
import CategoryList from './components/CategoryList';
import './Library.css';

const Library = () => {
    
    return(
        <div className="NewHome">
            <div className="NewHomeContainer">
                <h1>Categorias</h1>
                <CategoryList />
            </div>
        </div>
    )
}

export default Library;