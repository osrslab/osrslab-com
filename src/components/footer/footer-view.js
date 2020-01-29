import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

// eslint-disable-next-line object-curly-newline
const Footer = ({ github, discord, twitter, patreon }) => (
  <footer className='footer'>
    <nav className='container has-text-centered'>
        <a className='footer-social' href={github} target='_blank' rel='noopener noreferrer' title='OSRS Logs on GitHub'>
          <i className="fab fa-github" />
        </a>

        <a className='footer-social' href={discord} target='_blank' rel='noopener noreferrer' title='OSRS Logs on Discord'>
          <i className="fab fa-discord" />
        </a>

        <a className='footer-social' href={twitter} target='_blank' rel='noopener noreferrer' title='OSRS Logs on Twitter'>
          <i className="fab fa-twitter" />
        </a>

        <a className='footer-social' href={patreon} target='_blank' rel='noopener noreferrer' title='OSRS Logs on Patreon'>
          <i className="fab fa-patreon" />
        </a>
    </nav>
  </footer>
);

Footer.propTypes = {
  github: PropTypes.string.isRequired,
  discord: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  patreon: PropTypes.string.isRequired,
};

export default Footer;
