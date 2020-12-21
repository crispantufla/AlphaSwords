import React, {useEffect, useState}  from 'react';
import { fetchResource } from '../../../api';
import Commentary from './components/Commentary';
import AddCommentary from './components/AddCommentary';
import NewCommentary from './components/NewCommentary';
import './CommentViewer.css';

const CommentsViewer = ({id}) => {
    const [commentContent, setCommentContent] = useState();
    const [newCommentary, setNewCommentary] = useState();

    useEffect(() => {
        fetchResource ('user/getcomments', id, 'GET').then(setCommentContent);
    }, [newCommentary])

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
            <AddCommentary bookid={id} setNewCommentary={setNewCommentary} />
        </div>
    )
}

export default CommentsViewer;
