import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header }  from './components/Header'
import {Add } from './components/Add'
import {WatchList} from './components/WatchList'
import {Watched} from './components/Watched'
import './App.css';
import {AppProvider} from './context/context'

function App() {
  return (
    <AppProvider>
    <Router>

<Header />
<Switch>
  <Route exact path="/">
  <WatchList />
  </Route>
  <Route path="/watched">
<Watched />
  </Route>
  <Route path="/add">
<Add />
  </Route>
</Switch>
    </Router>
    </AppProvider>
  );
}

export default App;
