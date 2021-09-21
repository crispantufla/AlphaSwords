import React, { useState, useEffect, Fragment } from 'react';
import {fetchResource} from "../../../api";
import Pagination from '../../Pagination/Pagination';
import BookList from './BookList';

const CategoryList = ({category, pages}) => {
    const [categoryData, setCategoryData] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchResource('book/getcategories', category + "/" + currentPage, 'GET').then(categoriesResult => setCategoryData(categoriesResult))
    }, [category, currentPage]);

    useEffect(()=> {
        setCurrentPage(1)
    }, [category, pages]);

    return (
        <Fragment>
            {categoryData && 
                <div className="CategoryListContainer"> 
                    <BookList books={categoryData.category.books} />
                    <Pagination totalPages={Math.ceil(pages / categoryData.limit)} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>
            }
        </Fragment>  
    )
}

export default CategoryList;