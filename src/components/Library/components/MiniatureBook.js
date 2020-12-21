import React from 'react';
import { Link } from 'react-router-dom';

const MiniatureBook = ({ book }) => {
    return (
        <div className= "NewMiniatureBook">
            <Link to={ "book/" + book._id }>
                {book && <div className="ImgContainer"><img src={book.cover} className="NewImg"/></div>}
                {book && <p className="BookTitle">{book.title}</p>}
            </Link>
        </div>
    )
}

export default MiniatureBook