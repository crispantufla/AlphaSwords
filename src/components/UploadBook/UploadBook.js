import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import SelectRequest from './SelectRequest';
import './UploadBook.css';

const UploadBook = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  const [category, setCategory] = useState();
  const fileInputEl = useRef(null);

  const handleImputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (files) => {
    const url = `http://localhost:3001/track`;

    if (files) {
      const formData = new FormData();

      formData.append('track', files[0]);
      formData.append('name', data.title);
      formData.append('title', data.title);
      formData.append('category', category);
      formData.append('author', data.author);
      formData.append('cover', data.cover);
      formData.append('synopsis', data.synopsis);

      const options = {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`
        },
        mode: 'cors',
      };

      fetch(url, options)
        .then((bookResult) => {
          if (bookResult.status === 200) {
            return bookResult.json();
          }
          return Promise.reject(bookResult.status);
        })
        .then(result => {
          history.push('/libro/' + result._id);
        })
        .catch((error) => console.log(error));
    }
  }
  

  return (
    <div className="UploadBook">
      <form>
        <h2>SUBE UN LIBRO</h2>
        <input type="text" name="title" onChange={handleImputChange} placeholder="Titulo del libro"/>
        <SelectRequest setCategory={setCategory} request="category" />
        <input type="text" name="author" onChange={handleImputChange} placeholder="Autor del libro"/>
        <textarea type="text" name="synopsis" onChange={handleImputChange} placeholder="Sinopsis del libro"/>
        <input type="text" name="cover" onChange={handleImputChange} placeholder="Portada en URL"/>
        <input type="file" id="fileupload" accept=".mp3,audio/*" ref={fileInputEl} />
        <a className={"submitButton"} onClick={ () => handleSubmit(fileInputEl.current.files) }>
          Crear libro
        </a>
      </form>
    </div>
  )
}

export default UploadBook;