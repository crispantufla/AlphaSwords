import React, { Fragment } from 'react';

const commentary = ({data}) => {

    return (
        <Fragment>
            <div className="UserComentario">{data && data.user.nickname} opinó:</div>
            <div className="UserOpinion">{ data && data.comment}</div>
        </Fragment>
    )
}

export default commentary;