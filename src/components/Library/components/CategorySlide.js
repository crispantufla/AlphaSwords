import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

const CategorySlider = ({data, setCategory}) => {
    const handleclick = (event) => {
        setCategory(event.target.name)
    }

    return (
        <div className="CategorySlide">
            {data && data.map(item => (
                <NavLink 
                    className="CategoryItem" 
                    to={"/biblioteca/" + item.name.toLowerCase()} 
                    activeClassName="CategoryItemActive" 
                    name={item._id} 
                    onClick={handleclick}
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
)
}

export default CategorySlider;