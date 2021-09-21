import React, { useState } from 'react';
import { fetchResource } from '../../../../api'
import './AddComment.css'

const AddCommentary = ({bookid, setNewCommentary}) => {
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    setComment(e.target.value);
  }
  
  const handleSubmit = () => {
    fetchResource ('data/comments', '', 'POST', {
      comment: comment,
      user: localStorage.getItem('id'),
      book: bookid
    }).then(setNewCommentary);
  }

  return (
    <div>
      <br/>
      <h4>¡Su opinión también cuenta!</h4>
      <br/>
          <textarea
              className="textArea"
              name="mensaje"
              placeholder="¡Comparta tu opinión con los demás oyentes!"
              cols="50"
              rows="10"
              id="textarea"
              onChange={handleChange}>
              {comment}
          </textarea>
          <br/>
              <button onClick={handleSubmit}>Enviar</button>
        <br/>
        <br/>
    </div>
  )
}

export default AddCommentary;