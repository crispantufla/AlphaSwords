import React, { useState, useEffect, Fragment } from 'react';
import Library from './components/Library';
import BookFinder from './components/BookFinder';
import { fetchResource } from "../../api";
import './Library.css';


const LoadLibrary = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetchResource('data/category', '', 'GET').then(setCategories)
    }, []);

    return (
        <div className="library">
            <div className="header">    
                <div className="subTitle">Encuentra tu libro preferido</div>
                <BookFinder />
            </div>
            {categories ? <Fragment>
                {<Library categories={categories} />}
            </Fragment> : <div>loading...</div>}
        </div>
    )
}

export default LoadLibrary;