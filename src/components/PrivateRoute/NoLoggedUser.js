import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import {isLogin} from '../../utils/loginUtils'

const NoLoggedUser = ({ component: Component, path }) => (
    <Route path={path} render={() => {
      return isLogin() ? <Redirect to="/biblioteca" /> : <Component /> ;
    }}/>
  )

export default NoLoggedUser;