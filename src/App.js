import React from 'react';
import Library from './components/Library/Library';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Forgetpass from './components/Login/ForgetPass';
import PageUploadBook from './components/UploadBook/PageUploadBook';
import InfoAudioLibro from './components/InfoAudioLibro/InfoAudioLibro';
import { LoggedContextProvider } from './LoggedContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, LIBRARY, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS } from './routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LoggedContextProvider>
          <Navbar />
          <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={LOGIN} exact component={Login} />
            <Route path={REGISTER} component={Register} />
            <Route path={LIBRARY} component={Library} />
            <PrivateRoute path={PERFIL} component={UserPanel} />
            <PrivateRoute path={UPLOADBOOK} component={PageUploadBook} />
            <PrivateRoute path={"/book/:bookid"} component={InfoAudioLibro} />
            <Route path={FORGETPASS} exact component={Forgetpass} />
          </Switch>
        </LoggedContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;