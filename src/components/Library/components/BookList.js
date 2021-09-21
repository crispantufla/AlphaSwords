import React from 'react';
import MiniatureBook from './MiniatureBook';

const BookList = ({ books }) => {
    return (
        <div className="BookList">
            {books && books.map(item => (
                <MiniatureBook book={item} />
            ))}
        </div>
    )
}

export default BookList;