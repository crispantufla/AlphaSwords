import React, { useState, useEffect, Fragment } from 'react';
import CategoryList from './components/CategoryList';
import Header from './components/Header';
import CategorySlider from './components/CategorySlide';
import { useParams, useHistory } from 'react-router-dom';
import { fetchResource } from "../../api";
import './Library.css';


const checkear = (category, history) => {
    if (category === undefined) {
        return history.push('/biblioteca/misterior%20y%20suspense');
    }
}

const Library = () => {
    const [data, setData] = useState();
    const [categorySelected, setCategory] = useState("5fe78e29882578355d25056e");
    const history = useHistory();
    let { category } = useParams();

    checkear(category, history);

    useEffect(() => {
        fetchResource('data/category', '', 'GET').then(setData);
    }, []);

    return (
        <div className="library">
            <Header />
            <CategorySlider data={data} setCategory={setCategory} />
            {categorySelected ? <Fragment>
                <CategoryList category={categorySelected} />
            </Fragment> : <div>loading...</div>}
        </div>
    )
}

export default Library;