/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Header title='OSRS Logs' />
    <Routes />
    <Footer
      discord='https://discord.gg/67GHavf'
      twitter='https://twitter.com/osrslogs'
      patreon='https://patreon.com/osrslogs'
      github='https://github.com/osrslogs'
    />
  </BrowserRouter>
);

export default App;
