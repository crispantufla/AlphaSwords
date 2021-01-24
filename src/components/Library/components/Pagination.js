import React, { useState, useEffect } from 'react';
import './pagination.css'

const Pagination = () => {
    const [currentPage, setCurrentPages] = useState(1);
    const [totalPages, setTotalPages] = useState(6);
    const [pages, setPages] = useState([]);
    const [disableNextButton, setDisableNextButton] = useState();
    const [disablePrevButton, setDisablePrevButton] = useState();
    
    const handledisableNextButton = () => {
        setCurrentPages(currentPage + 1);
    }

    const handlePrevButton = () => {
        setCurrentPages(currentPage - 1);
    }

    useEffect(() =>{
        setDisablePrevButton(currentPage == 1)
        setDisableNextButton(currentPage == totalPages)
        setPages([]);

        if (totalPages <= 7) {
            setPages([...Array(totalPages + 1).keys()].slice(1))
            return
        }

        if (currentPage <= 4) {
            setPages(oldArray => [...oldArray, 1, 2, 3, 4, 5]);
        } else {
            setPages(oldArray => [...oldArray, 1, "..."]);
        }
        
        if (currentPage > 4 && currentPage < totalPages - 3) {
            setPages(oldArray => [...oldArray, currentPage - 1, currentPage, currentPage + 1]);
        }
        
        if (currentPage >= totalPages - 3) {
            console.log("cuarto IF")
            setPages(oldArray => [...oldArray, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
        } else {
            setPages(oldArray => [...oldArray, "...", 15])
        }
    }, [currentPage]) 

    const handleClick = (event) => {
        setCurrentPages(event.target.dataset.page);
    }

    return(
        <div>
            <button disabled={disableNextButton} onClick={handledisableNextButton}>Next</button>
                <div>{pages && pages.map(page => {
                    if (page == "...") {
                        return <span>...</span>
                    }
                    
                    let className = (page == currentPage ? "actual" : "notActual")
                    return (
                        <button onClick={handleClick} data-page={page} className={className}>{page}</button>
                    )
                })}</div>
            <button disabled={disablePrevButton} onClick={handlePrevButton}>Prev</button>
        </div>
    )
}


export default Pagination;