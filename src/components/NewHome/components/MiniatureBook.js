import React, {useState, useEffect} from 'react';
import {fetchResource} from "../../../api";

const MiniatureBook = ({book}) => {

    return(
        <div>
            {book && <img src={book.cover}></img>}
        </div>
    )
}

export default MiniatureBook