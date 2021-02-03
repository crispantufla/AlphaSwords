import React, {Fragment, useState, useEffect} from 'react';
import {fetchResource} from '../../../api';

const FavButton = ({bookId}) => {
    const [alreadyFavorite, setAlreadyFavorite] = useState();
    const [quantityFavorites, setQuantityFavorites] = useState();

    useEffect(() => {
        fetchResource('book/checkfavs', bookId, 'GET'
        ).then(bookFavs => isAlreadyFav(bookFavs) );
    }, [bookId])

    const isAlreadyFav = (bookFavs) => {
        setQuantityFavorites(bookFavs.length);
        for (var prop in bookFavs) {
            if (bookFavs.hasOwnProperty(prop) && bookFavs[prop].user === localStorage.getItem('id')) {
                return setAlreadyFavorite(bookFavs[prop]._id);
            }
        }
        return setAlreadyFavorite(false);
    }

    const handleInputFavButton = () => {
        if (alreadyFavorite) {
            fetchResource('data/favorite', alreadyFavorite, 'DELETE')
            .then(setQuantityFavorites(quantityFavorites -1), setAlreadyFavorite(false));
        } else {
            fetchResource('data/favorite', '', 'POST', {
                book: bookId.bookId,
                user: localStorage.getItem('id')
            }).then(result => setAlreadyFavorite(result._id), setQuantityFavorites(quantityFavorites +1 ));
        }
    } 

    return (
        <Fragment>
            <div>Este libro tiene {quantityFavorites} favoritos</div>
            <div>
                {alreadyFavorite ?
                    <button onClick={handleInputFavButton}>Quitar de favoritos</button> :
                    <button onClick={handleInputFavButton}>Agregar a Favoritos</button> }
            </div>
        </Fragment>
    )
}

export default FavButton;