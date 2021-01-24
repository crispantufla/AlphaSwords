import React, { useState, useEffect, Fragment } from 'react';
import Library from './components/Library'
import Header from './components/Header';
import { fetchResource } from "../../api";
import './Library.css';


const LoadLibrary = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetchResource('data/category', '', 'GET').then(setCategories);
    }, []);

    return (
        <div className="library">
            <Header />
            {categories ? <Fragment>
                {<Library categories={categories} />}
            </Fragment> : <div>loading...</div>}
        </div>
    )
}

export default LoadLibrary;