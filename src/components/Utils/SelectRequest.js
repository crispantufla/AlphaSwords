import React, { useState, useEffect } from "react";
import {fetchResource} from "../../api";
import './SelectRequest.css';


const SelectRequest = ({setCategory, request}) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('data/category',"",'GET').then(result => { setData(result) });
    }, []);

    return (
        <select
        className={"input-library"}
            onChange={event => setCategory(event.target.value)}
        >
            <option disabled selected>Selecciona una categoria</option>
            {data && data.map((item) => (
                <option key={item.name} value={item._id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectRequest;