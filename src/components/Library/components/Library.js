import React, { useState, useEffect, Fragment } from 'react';
import CategoryList from './CategoryList';
import { useParams, useHistory, NavLink } from 'react-router-dom';

const Library = ({categories}) => {
    const [categorySelected, setCategorySelected] = useState();
    const [pages, setPages] = useState();
    const history = useHistory();
    let { category } = useParams();

    useEffect(() => {
       setCategorySelected(categories[0]._id);
       setPages(categories[0].books.length);
        if (category === undefined) {
            return history.push(`/biblioteca/${categories[0].name}`)
        }
    }, []);

    const handleclick = (event) => {
        setCategorySelected(event.target.dataset.id);
        setPages(event.target.dataset.count);
    }

    return (
        <div className="library">
            <div className="CategorySlide">
            {categories.map(item => (
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
            {categorySelected ? <Fragment>
                <CategoryList category={categorySelected} pages={pages}/>
            </Fragment> : <div>Loading...</div>}
        </div>
    )
}

export default Library;