import React, { useState, useEffect, Fragment } from 'react';
import {fetchResource} from "../../../api";
import BookList from './BookList';

const CategoryList = ({category}) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('book/getcategorys', category, 'GET').then(result => setData(result));
    }, [category]);

    return (
        <Fragment>
            {data && 
                <div className="CategoryListContainer"> 
                    <BookList books={data.books} />
                </div>
            }
        </Fragment>  
    )
}

export default CategoryList;