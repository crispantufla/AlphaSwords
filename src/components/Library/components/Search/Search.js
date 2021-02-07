import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResource } from '../../../../api';
import BookList from '../BookList';

const Search = () => {
    const { query } = useParams();
    const [books, setBooks] = useState();
    const [category, setCategory] = useState();
    const [filterBooks, setFilterBooks] = useState();
    console.log(books)

    useEffect(() => {
        fetchResource('book/searchbook', query, 'POST').then(setBooks);
    }, [])

    const filters = (event) => {
        setCategory(event.target.value)
        for (let x = 0; x < books.books.length; x++){
            if (books.books[x].category == category){
                console.log( books.books[x].category, category )
                setFilterBooks({
                    ...filterBooks,
                    books : books.books[x]
                })
                console.log(filterBooks);
            } else {
                console.log("chau" + category + books.books[x].category)
            }
        }
    }

    return (
        <div className="Search">
            {books && books.books ? 
                <div>
                    <h2>Resultado de tu busqueda...</h2>
                    {<BookList books={books.books}/>}
                </div> : 
                <div> 
                    <h2>No hemos encontrado ningun libro :c</h2>
                    <h3>Aqui hay otros que pueden interesarte...</h3>
                    <h4>no hay ninguno...</h4>
                </div>}
        </div>

    )
}

export default Search;