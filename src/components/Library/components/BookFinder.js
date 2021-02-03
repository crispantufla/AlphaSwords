import React, { useState } from 'react';
import {fetchResource} from "../../../api";

const BookFinder = () => {
    const [data, setData] = useState();

    const handleInput = (event) => {
        setData(event.target.value);
    }

    const searchData = () => {
        fetchResource('book/searchbook', data, 'POST').then(result => console.log(result));
    }

    return (
        <div>
            <input type="text" placeholder="Titulo del libro" onChange={handleInput} />
            <button onClick={searchData}>Buscar</button>
        </div>
    )
}

export default BookFinder;