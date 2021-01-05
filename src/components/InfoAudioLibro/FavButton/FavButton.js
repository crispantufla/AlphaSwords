import React, {Fragment, useState, useEffect} from 'react';
import {fetchResource} from '../../../api';

const FavButton = (bookId) => {
    const [favorite, setFavorite] = useState();
    const [quantityFavorites, setQuantityFavorites] = useState()

    useEffect(() => {
        fetchResource('book/checkfavs', bookId.bookId, 'GET'
        ).then(result => isalReadyFav(result));
    }, [bookId.bookId])

    const isalReadyFav = (result) => {
        setQuantityFavorites(result.length);
        for (var prop in result) {
            if (result.hasOwnProperty(prop) && result[prop].user === localStorage.getItem('id')) {
                return setFavorite(result[prop]._id);
            }
        }
        return setFavorite(false);
    }

    const handleInputChange = () => {
        if (favorite) {
            fetchResource('data/favorite', favorite, 'DELETE').then(setQuantityFavorites(quantityFavorites -1), setFavorite(false));
        } else {
            fetchResource('data/favorite', '', 'POST', {
                book: bookId.bookId,
                user: localStorage.getItem('id')
            }).then(result => setFavorite(result._id), setQuantityFavorites(quantityFavorites +1 ));
        }
    } 

    return (
        <Fragment>
            <div>Este libro tiene {quantityFavorites && quantityFavorites} favoritos </div>
            <div>
                {favorite ? 
                    <button onClick={handleInputChange}>Quitar de favoritos</button> : 
                    <button onClick={handleInputChange}>Agregar a Favoritos</button> }
            </div>
        </Fragment>
    )
}

export default FavButton;