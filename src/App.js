import React from 'react';
import LoadLibrary from './components/Library/LoadLibrary'
import Navbar from './components/Navbar/Navbar';
import Container from './components/UserPanel/Container';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoLoggedUser from './components/PrivateRoute/NoLoggedUser';
import UploadBook from './components/UploadBook/UploadBook';
import InfoAudioLibro from './components/InfoAudioLibro/InfoAudioLibro';
import Search from './components/Library/components/Search/Search';
import Footer from './components/Footer/Footer';
import { LoggedContextProvider } from './LoggedContext';
import { BrowserRouter, Switch } from 'react-router-dom';
import { HOME, PERFIL, UPLOADBOOK } from './routes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <LoggedContextProvider>
        <Navbar />
        <div className="App">
          <Switch>
            <NoLoggedUser path={HOME} exact component={Home} />
            <PrivateRoute path={"/biblioteca"} exact component={LoadLibrary} />
            <PrivateRoute path={"/biblioteca/:category"} component={LoadLibrary} />
            <PrivateRoute path={PERFIL} component={Container} />
            <PrivateRoute path={UPLOADBOOK} component={UploadBook} />
            <PrivateRoute path={"/libro/:bookId"} component={InfoAudioLibro} />
            <PrivateRoute path={"/search/:query"} component={Search} />
          </Switch>
          <Footer />
        </div>
      </LoggedContextProvider>
    </BrowserRouter>
  );
}

export default App;