import React, { Fragment } from 'react';

const NewCommentary = ({ newCommentary }) => {
    return (
        <Fragment>
            Aqui esta tu ultimo Comentario: {newCommentary.comment}
        </Fragment>
    )
}

export default NewCommentary;