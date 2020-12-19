import React from 'react';
import MiniatureBook from './MiniatureBook';

const BookList = ({books}) => {

    return(
        <div>
            {books && books.map((item) => (
                <div> 
                    <MiniatureBook book={item} />
                </div>
            ))}
        </div>
    )
}

export default BookList;