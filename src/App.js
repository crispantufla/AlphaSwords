import './App.css';
import React, { useState } from 'react';
import NewHome from './components/NewHome/NewHome';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import InfoAudioLibro from './components/InfoAudioLibro/InfoAudioLibro';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Forgetpass from './components/Login/ForgetPass';
import PageUploadBook from './components/UploadBook/PageUploadBook';
import Footer from './components/Footer/Footer';
import {LogedContextProvider} from './LogedContext';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS} from './routes';
import { isLogin } from './utils/loginUtils';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <LogedContextProvider>
          <Navbar />
          <Switch>
            <Route path={HOME} exact component={NewHome} />
            <Route path={LOGIN} exact component={Login} />
            <Route path={REGISTER} component={Register} />
            <Route path={BIBLIOTECA} component={InfoAudioLibro} />
            <PrivateRoute path={PERFIL} component={UserPanel} />
            <PrivateRoute path={UPLOADBOOK} component={PageUploadBook} />
            <Route path={FORGETPASS} exact component={Forgetpass} />
          </Switch>
        </LogedContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
