import React from 'react';
import { Link } from 'react-router-dom';

const MiniatureBook = ({ book }) => {
    return (
        <div className= "MiniatureBook">
            <Link to={"/libro/" + book._id}>
                {book && <div className="ImgContainer">
                    <div className="MiniatureBookTitle">{book.title}</div>
                    <img src={book.cover} className="BookImg" alt="image not found"/>
                </div>}
            </Link>
        </div>
    )
}

export default MiniatureBook