import React from 'react';
import Library from './components/Library/Library';
import Navbar from './components/Navbar/Navbar';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoLoggedUser from './components/PrivateRoute/NoLoggedUser';
import UploadBook from './components/UploadBook/UploadBook';
import InfoAudioLibro from './components/InfoAudioLibro/InfoAudioLibro';
import Footer from './components/Footer/Footer';
import { LoggedContextProvider } from './LoggedContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, LIBRARY, PERFIL, UPLOADBOOK } from './routes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <LoggedContextProvider>
        <Navbar />
        <div className="App">
          <Switch>
            <NoLoggedUser path={HOME} exact component={Home} />
            <PrivateRoute path={"/biblioteca"} exact component={Library} />
            <PrivateRoute path={"/biblioteca/:category"} component={Library} />
            <PrivateRoute path={PERFIL} component={UserPanel} />
            <PrivateRoute path={UPLOADBOOK} component={UploadBook} />
            <PrivateRoute path={"/libro/:bookId"} component={InfoAudioLibro} />
          </Switch>
        </div>
      </LoggedContextProvider>
    </BrowserRouter>
  );
}

export default App;