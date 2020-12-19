import React, {useEffect, useState}  from 'react'
import {fetchResource} from "../../api";
import './CommentViewer.css';

export const CommentsViewer = (props) => {

    console.log(props.title);

    const [commentContent, setCommentContent] = useState();

    useEffect(() => {
        fetchResource ('data/comments', '5fc547952818650da53038e5', 'GET').then(result => {setCommentContent(result)});
    }, [])

    console.log(commentContent);
    

    return (
        <div className="BoxComments">
            <br/>
            <h4>Los demás oyentes de {props.title} opinan que...</h4>
            <br/>
            <div className="UserComentario">Usuaria/o USER opinó en FECHA: {commentContent && commentContent.id}</div>
            <div className="UserOpinion">Comentario: {commentContent && commentContent.id}</div>

        </div>
    )
}
