import React, { useState, useEffect } from 'react';
import './pagination.css'

const Pagination2 = ({totalpages, setPage, page}) => {
    let count = Math.round((totalpages / 5) + 1);

    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    const [pageLength, setPageLength] = useState([]);
    const [pageOk, setPageOk] = useState()

    useEffect(() => {
        if (page <= 1) {
            setPrevPage(true);

        } else {
            setPrevPage(false);
        }

        if (page == count) {
            setNextPage(true)
        } else {
            setNextPage(false)
        }
    }, [page])

    useEffect(() => {
        if (page <= 2 ) { 
            setPageOk(false);
        } else {
            setPageOk(true)
            let beforePages = page - 1;
            let afterPages = parseInt(page) + 1; 
            setPageLength([beforePages, page, afterPages])
        }
    }, [page])

    const PrevPage = () => {
        setPage(page - 1)
    }

    const NextPage = () => {
        setPage(parseInt(page) + 1)
    }

    const handleClick = (event) => {
        setPage(event.target.innerHTML)
    }

    console.log(page)

    return (
        <div className="pagination2">
            {pageOk ?
            <ul>
                <li><button disabled={prevPage} onClick={PrevPage}>Prev</button></li>
                <li className="numb" onClick={handleClick}>1</li>
                {pageLength.map(item => <li className="numb" onClick={handleClick}>{item}</li>)}
                <li className="numb" onClick={handleClick}>{count}</li>
                <li><button disabled={nextPage} onClick={NextPage}>Next</button></li>
            </ul> : 
            <ul>
                <li><button disabled={prevPage} onClick={PrevPage}>Prev</button></li>
                <li className="numb" onClick={handleClick}>1</li>
                <li className="numb" onClick={handleClick}>2</li>
                <li className="numb" onClick={handleClick}>3</li>
                <li className="numb" onClick={handleClick}>3</li>
                <li className="numb" >...</li>
                <li className="numb" onClick={handleClick}>{count}</li>
                <li><button disabled={nextPage} onClick={NextPage}>Next</button></li>
            </ul>
            }
        </div> 
    )

}

export default Pagination2;