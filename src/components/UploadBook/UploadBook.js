import React, { useState, useRef } from "react";
import SelectRequest from '../Utils/SelectRequest';
import './UploadBook.css';

const UploadBook = () => {

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
  }

  return (
      
    <div className={"uploadForm"}>
      <label className={"labelUpload tituloUpload"}>
        SUBE UN LIBRO
      </label><br/>
      <label className={"labelUpload"}>
        Titulo
      </label><br/>
      <input 
        className={'input-library'} 
        type="text" 
        name="title"
        required 
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Categoria
      </label><br/>
      <SelectRequest 
        setCategory={setCategory} 
        request="category">
      </SelectRequest><br/>
      <label className={"labelUpload"}>
        Autor
      </label><br/>
      <input 
        className={'input-library'} 
        type="text" 
        name="author" 
        required 
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Sinopsis
      </label><br/>
      <textarea 
        type="text" 
        name="sinopsis" 
        required
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Cover
      </label><br/>
      <input
        type="text" 
        name="cover" 
        required
        onChange={handleImputChange}
      /><br/>
      <label className={"labelUpload"}>
        Archivo
      </label><br/>
      <input 
        className={'input-library'} 
        type="file"
        id="fileupload"
        accept=".mp3,audio/*"
        ref={fileInputEl}
        required
        /><br/>
      <button 
        className={"submitButton"}
        onClick={ () => handleSubmit(fileInputEl.current.files) }>
        Crear libro
      </button>
    </div>
  )
}

export default UploadBook;