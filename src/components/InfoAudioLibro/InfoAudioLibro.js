import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResource } from "../../api";
import CommentsViewer from './CommentsViewer/CommentsViewer';
import TrackPLayer from '../TrackPlayer/TrackPlayer';
import FavButton from './FavButton/FavButton';
import './InfoAudioLibro.css';

const InfoAudioLibro = () => {
    const [book, setBook] = useState();
    const { bookId } = useParams()

    useEffect(() => {
        fetchResource('book/getbook', bookId, 'GET').then(setBook);
    }, [bookId])

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
                            {book.file ? <TrackPLayer id={book.file}/> : <div>No se Ha podido encontrar el archivo</div>} 
                        </div>
                        <div className="bookBoxText">
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