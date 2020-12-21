import React, { useState, useEffect } from 'react';
import {fetchResource} from "../../../api";
import BookList from './BookList';

const CategoryList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('user/getcategorys', '', 'GET').then(setData);
    }, []);

    return (
        <div className="NewCategoryList">
            {data && data.map(item => (
                <div className="NewCategoryListContainer"> 
                    <h3>{item.name}</h3>
                    <BookList books={item.books} />
                </div>
            ))}
        </div>  
    )
}

export default CategoryList;