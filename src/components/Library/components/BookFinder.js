import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const BookFinder = () => {
    const history = useHistory();
    const [data, setData] = useState();

    const handleInput = (event) => {
        setData(event.target.value);
    }

    const searchData = () => {
        history.push("/search/" + data);
    }

    return (
        <div className="BookFinder">
            <form className="formBookFinder">
                <SearchIcon />
                <input type="text" placeholder="Titulo del libro" onChange={handleInput} />
                {data && <button onClick={searchData} >Buscar</button>}
            </form>
        </div>

    )
}

export default BookFinder;