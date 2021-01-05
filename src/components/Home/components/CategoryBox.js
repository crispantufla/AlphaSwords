import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBox = ({ category, img }) => {
    return (
        <div className="categoryBox">
            <Link to={ "/" + category.replace(/ /g, '').toLowerCase()}>
                <div className="categoryImgContainer">
                    <div className="more">{category}</div>
                    <img src={img} className="categoryImg" alt="aqui yo puse mi imagen"/>
                </div>
            </Link>
        </div>
    )
}

export default CategoryBox;