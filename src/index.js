import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      {/* <Route path="/cadastro/video" component={CadastroVideo}></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route> */}
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);
