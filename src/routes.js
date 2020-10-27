import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Members from './pages/members'
import About from './pages/about'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/members" component={Members} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  )
}

export default Routes;
