import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navigation from './Components/navigation/Navigation';
import Formulaire from './Views/formulaire/Formulaire';
import Home from './Views/home/Home';


const App = () => {
  return (
    <BrowserRouter>
      <div className='container-principal'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Formulaire} />
          <Route exact path='/students/add' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
