import React, {useState} from 'react'
import './AddComment.css'

export const AddComment = (props) => {

    const [comment, setComment] = useState('')


    const handleChange = (e) => {
        setComment(e.target.value)
      }
      console.log(comment);

    const handleSubmit = () => {

        const url = `http://localhost:3001/comments`;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                comment ,
                id: localStorage.getItem('id'),
                time: new Date(),
            }),
            headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`
            },
            mode: 'cors',
          };

        fetch(url, options)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
    }
    

    return (
        
        <div>
            <br/>
            <h4>¡Su opinión también cuenta!</h4>
            <br/>
                <form>
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
                    <input type="submit" onClick={handleSubmit}/>
                </form>

            <br/>
            <br/>
        </div>
    )
}
