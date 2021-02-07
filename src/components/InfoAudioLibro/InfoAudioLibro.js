import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResource } from "../../api";
import CommentsViewer from './CommentsViewer/CommentsViewer';
import TrackPLayer from '../TrackPlayer/TrackPlayer';
import FavButton from './FavButton/FavButton';
import './InfoAudioLibro.css';
import Rating from '@material-ui/lab/Rating';


const InfoAudioLibro = () => {
    const [book, setBook] = useState();
    const { bookId } = useParams();
    const [score, setScore] = useState({userScore: 3});
    const [disabledRating, setDisabledRating] = useState(false);

    useEffect(() => {
        fetchResource('book/getbook', bookId, 'GET').then(setBook);
        fetchResource('book/checkuserscore', bookId, 'GET').then(setScore);
    }, [bookId])

    const HandleScore = (event) => {
        setScore({userScore: event.target.value})
        let body = {
            userScore: event.target.value,
            user: localStorage.getItem('id'),
            book: bookId
        }
        fetchResource('book/savescore', '', 'POST', body).then(setScore);
        setDisabledRating(true);
    }

    return (
        <Fragment>
            {book && 
                <div className="boxInfo">
                    <div className="bookContainer">
                        <div className="titleBox">{book.title}</div>
                        <FavButton bookId={bookId} />
                        <img className="bookImage" src={book.cover} alt="image not found" />
                    </div>
                    <div className="trackContainer">
                        <div className="trackPlayer">
                            {book.file ? <div>Reproductor</div> : <div>No se Ha podido encontrar el archivo</div>} 
                        </div>
                        <div className="bookBoxText">
                            <Rating name="half-rating" value={score.userScore} onChange={HandleScore} disabled={disabledRating} />
                            <div className="titleBox">{book.title}</div>
                            <div className="authorBox">Autor/a: {book.author}</div>
                            <div className="categoryBox">Categoria: {book.category.name}</div>
                            <div className="createdByBox">Creado por: {book.user.nickname}</div>
                            <div className="descriptionBox">Descripción: {book.synopsis}</div>
                        </div>
                    </div>
                    <CommentsViewer bookId={bookId} />
                </div>
            }
        </Fragment>
    )
};

export default InfoAudioLibro;