import React, { useState, useEffect, Fragment } from 'react';
import {fetchResource} from "../../../api";
import Pagination from './Pagination';
import Pagination2 from './Pagination2';
import BookList from './BookList';
import BookFinder from './BookFinder';

const CategoryList = ({category, pages}) => {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchResource('book/getcategorys', category + "/" + page, 'GET').then(result => setData(result));
    }, [category, page]);

    useEffect(()=> {
        setPage(1);
    }, [category, pages])

    return (
        <Fragment>
            {data && 
                <div className="CategoryListContainer"> 
                    <BookFinder />
                    <BookList books={data.books} />
                </div>
            }
            <Pagination totalpages={pages} setPage={setPage} page={page}/>
        </Fragment>  
    )
}

export default CategoryList;