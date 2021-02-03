import React, { useState, useEffect } from "react";
import {fetchResource} from "../../api";

const SelectRequest = ({setCategory}) => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        fetchResource('data/category',"",'GET').then(category => { setCategories(category) });
    }, []);

    return (
        <select
        className={"input-library"}
            onChange={event => setCategory(event.target.value)}
        >
            <option disabled selected>Selecciona una categoria</option>
            {categories && categories.map((item) => (
                <option key={item.name} value={item._id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectRequest;