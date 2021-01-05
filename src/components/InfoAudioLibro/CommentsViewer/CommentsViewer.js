import React, {useEffect, useState}  from 'react';
import { fetchResource } from '../../../api';
import Commentary from './components/Commentary';
import AddCommentary from './components/AddCommentary';
import NewCommentary from './components/NewCommentary';
import './CommentViewer.css';

const CommentsViewer = ({bookId}) => {
    const [commentContent, setCommentContent] = useState();
    const [newCommentary, setNewCommentary] = useState();

    useEffect(() => {
        fetchResource ('book/getcomments', bookId, 'GET').then(setCommentContent);
    }, [newCommentary, bookId])

    return (
        <div className="BoxComments">
            <br/>
            {newCommentary && <NewCommentary newCommentary={newCommentary} />}
            <h4>Los demás oyentes opinan que...</h4>
            <br/>
            {commentContent && commentContent.map(item => (
                <div> 
                    <Commentary data={item} />
                </div>
            ))}
            <AddCommentary bookid={bookId} setNewCommentary={setNewCommentary} />
        </div>
    )
}

export default CommentsViewer;
