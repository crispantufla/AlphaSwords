import React from 'react';
import UserForm from './components/UserForm';
import "./Home.css";

const Home = () => {
  return (
    <div className="homeBody">
      <div className="homePage">
        <div className="ourStory">
          <h1>
            S-Words
          </h1>
          <h4>
            Aqui puedes compartir tus Audiolibros preferidos y escucharlos cuando quieras
          </h4>
          <img src="https://i.ibb.co/Lp6m7tm/Sin-t-tulo-1.png" alt="hola"/>
        </div>
        <div className="userFormContainer">
          <div className="userForm">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;