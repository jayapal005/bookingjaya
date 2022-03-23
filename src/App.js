import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home Page/Home';
import Et from './Home Page/Et';
import Login from './Home Page/Login';
import Book from './Home Page/Book';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch >

      
      <Route path='/' exact>

      <Home/>
      </Route>
<Route path='/Et'exact>
  <Et/>
</Route>

<Route path='/Book/'exact>
  <Book/>
</Route>

  

      </Switch>
    </div>
    </Router>
  );
}

export default App;
