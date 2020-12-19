import React, { useState, useEffect } from 'react';
import {fetchResource} from "../../../api";
import BookList from './BookList';

import './CategoryList.css';


const CategoryList = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('user/getcategorys',"",'GET').then(result => { setData(result) });
    }, []);

    //key={item.name} value={item._id}>
    return(
       
        <div className="CategoryList">
            {data && data.map((item) => (
                <div> 
                    <h2>{item.name}</h2>
                    <BookList books={item.books}></BookList>
                </div>
            ))}
        </div>  
        
    )
}

export default CategoryList;