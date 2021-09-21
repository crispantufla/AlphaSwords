import React, { useState, useEffect, Fragment } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Pagination.css'

const Pagination = ({totalPages, setCurrentPage, currentPage}) => {
    const [pages, setPages] = useState([]);
    const [disableNextButton, setDisableNextButton] = useState();
    const [disablePrevButton, setDisablePrevButton] = useState();
    
    const handleNextButton = () => {
        setCurrentPage(parseInt(currentPage) + 1);
    }

    const handlePrevButton = () => {
        setCurrentPage(parseInt(currentPage) - 1);
    }

    useEffect(() =>{
        setDisablePrevButton(currentPage === 1);
        setDisableNextButton(currentPage === totalPages);
        setPages([]);
        console.log(typeof currentPage)

        if (totalPages <= 7) {
            setPages([...Array(totalPages + 1).keys()].slice(1));
            return;
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
            setPages(oldArray => [...oldArray, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
        } else {
            setPages(oldArray => [...oldArray, "...", totalPages])
        }
    }, [currentPage, totalPages]);

    const handleClick = (event) => {
        setCurrentPage(parseInt(event.target.dataset.page));
    }

    return(
        <Fragment>
            <ul className="paginationUl">
                <li><button className="paginationButton" disabled={disablePrevButton} onClick={handlePrevButton}> 
                        <NavigateBeforeIcon className="simbol"/>
                    </button></li>
                    {pages && pages.map(page => {
                        if (page === "...") {
                            return <li><span>...</span></li>
                        }
                        
                        let className = (page == currentPage ? "ActualPaginationButton" : "paginationButton")
                        return (
                            <li><button onClick={handleClick} data-page={page} className={className}>{page}</button></li>
                        )
                    })}
                <li><button className="paginationButton" disabled={disableNextButton} onClick={handleNextButton}><NavigateNextIcon /></button></li>
            </ul>
        </Fragment>
    )
}


export default Pagination;