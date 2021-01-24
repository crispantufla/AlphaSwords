import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

const CategorySlider = ({categories, setCategory, setPages}) => {
    const handleclick = (event) => {
        setCategory(event.target.dataset.id);
        setPages(event.target.dataset.count);
    }
    return (
        <div className="CategorySlide">
            {categories && categories.map(item => (
                <NavLink
                    className="CategoryItem"
                    to={"/biblioteca/" + item.name.toLowerCase()} 
                    activeClassName="CategoryItemActive" 
                    data-id={item._id} 
                    data-count={item.books.length}
                    onClick={handleclick}
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
)
}

export default CategorySlider;