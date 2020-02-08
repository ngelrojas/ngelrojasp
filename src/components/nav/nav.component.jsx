import React from 'react'
import {Link} from 'react-router-dom'
import HomeLogo from './assets/home.logo.jsx'
import TopiComponent from './assets/topic.component.jsx'
import UserComponent from './assets/user.component.jsx'
// import PbComponent from './assets/phonebook.component.jsx';
import NewsComponent from './assets/news.component.jsx'
import './nav.styles.scss'

const NavMenu = () => (
  <nav className="nav-menu">
    <ul className="wrapper-menu">
      <li className="menu__item">
        <Link to="/">
          <HomeLogo className="logo" />
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/topics">
          <TopiComponent className="logo" />
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/about-me">
          <UserComponent className="logo" />
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/news">
          <NewsComponent className="logo" />
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavMenu
