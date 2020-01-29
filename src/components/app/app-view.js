/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header';

const App = () => (
  <BrowserRouter>
    <Header title='OSRS Logs' />
  </BrowserRouter>
);

// <Route path='/' exact component={Home} />
// <Route path='/about' component={About} />
// <Route path='/posts' exact component={Posts} />

export default App;
