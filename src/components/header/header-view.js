import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Header = ({ title }) => (
  <header>
    <nav className='navbar is-transparent has-shadow'>
      <div className='container'>
        <div className='navbar-brand'>
          <NavLink className='navbar-item' exact to='/'>
            <img src='../public/logo-small-wide.png' alt='logo' />
            {title}
          </NavLink>
          <button className='navbar-burger' type='button' aria-label='menu' aria-expanded='false'>
            <span className='navbar-burger-style' aria-hidden='true'></span>
            <span className='navbar-burger-style' aria-hidden='true'></span>
            <span className='navbar-burger-style' aria-hidden='true'></span>
          </button>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <NavLink className='navbar-item is-tab is-toggle' activeClassName='is-active' to='/hiscores'>
              Hiscores
            </NavLink>
            <NavLink className='navbar-item is-tab is-toggle' activeClassName='is-active' to='/groups'>
              Groups
            </NavLink>
            <NavLink className='navbar-item is-tab is-toggle' activeClassName='is-active' to='/competitions'>
              Competitions
            </NavLink>
            <NavLink className='navbar-item is-tab is-toggle' activeClassName='is-active' to='/methods'>
              Methods
            </NavLink>
            <NavLink className='navbar-item is-tab is-toggle' activeClassName='is-active' to='/about'>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
