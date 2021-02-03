import React, { useState, useEffect, Fragment } from 'react';
import Library from './components/Library'
import { fetchResource } from "../../api";
import './Library.css';


const LoadLibrary = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetchResource('data/category', '', 'GET').then(setCategories);
    }, []);

    return (
        <div className="library">
            <div className="header">    
                <div className="title">S-Words</div>
                <div className="subTitle">Aqui Pudes escuchar tus libros preferidos, y compartirlos con el resto</div>
            </div>
            {categories ? <Fragment>
                {<Library categories={categories} />}
            </Fragment> : <div>loading...</div>}
        </div>
    )
}

export default LoadLibrary;