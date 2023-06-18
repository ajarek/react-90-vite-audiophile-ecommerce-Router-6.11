import './Footer.css'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <nav className='footer-nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <img
              src='/images/shared/desktop/logo.svg'
              alt='logo'
            />
          </Link>
        </div>

        <ul className={'wrapper'}>
          <Link
            className='link'
            to={'/'}
          >
            <h1> HOME</h1>
          </Link>
          <Link
            className='link'
            to={'/headphones'}
          >
            <h1> HEADPHONES</h1>
          </Link>
          <Link
            className='link'
            to={'/speakers'}
          >
            <h1>SPEAKERS</h1>
          </Link>
          <Link
            className='link'
            to={'/earphones'}
          >
            <h1>EARPHONES</h1>
          </Link>
        </ul>
      </nav>
      <div className='footer-container'>
        <div className='text'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className='social'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/shared/desktop/icon-facebook.svg'
              alt='icon facebook'
            />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/shared/desktop/icon-twitter.svg'
              alt='icon twitter'
            />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/shared/desktop/icon-instagram.svg'
              alt='icon instagram'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
