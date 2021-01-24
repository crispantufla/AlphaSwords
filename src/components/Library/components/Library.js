import React, { useState, useEffect, Fragment } from 'react';
import CategoryList from './CategoryList';
import CategorySlider from './CategorySlide';
import { useParams, useHistory } from 'react-router-dom';

const Library = ({categories}) => {
    const [categorySelected, setCategory] = useState();
    const [pages, setPages] = useState();
    const history = useHistory();
    let { category } = useParams();

    useEffect(() => {
       setCategory(categories[0]._id);
       setPages(categories[0].books.length);
        if (category === undefined) {
            return history.push(`/biblioteca/${categories[0].name}`);
        }
    }, []);

    return (
        <div className="library">
            <CategorySlider categories={categories} setCategory={setCategory} setPages={setPages}/>
            {categorySelected ? <Fragment>
                <CategoryList category={categorySelected} pages={pages}/>
            </Fragment> : <div>loading...</div>}
        </div>
    )
}

export default Library;