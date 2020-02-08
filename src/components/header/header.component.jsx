import React from 'react'
import {Link} from 'react-router-dom'
import ARComponent from './assets/logo.component.jsx'
import API from '../../config/config.jsx'
import './header.styles.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      searchItem: '',
      articles: [],
      fields: {},
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({searchItem: e.target.value})
    this.handleSearch()
  }

  handleSearch = () => {
    this.setState({isLoading: true})
    window
      .fetch(API + `api/articles`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          articles: response.data,
          isLoading: false,
        })
      })
  }

  render() {
    const {articles, searchItem} = this.state
    const filterArticles = articles.filter(
      article =>
        article.art_excerpt.toLowerCase().includes(searchItem.toLowerCase()) ||
        article.art_title.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <header className="nav-wrapper">
        <div className="header">
          <div className="header__wrapp-logo">
            <figure className="wrapp-logo__wrapper-logo">
              <Link to="/" className="logo">
                <ARComponent className="logo-ar" />
              </Link>
            </figure>
          </div>
          <div className="header__wrapp-form-search">
            <div className="wrapper-form">
              <div className="form">
                <label>
                  <input
                    type="search"
                    className="input"
                    placeholder="SEARCH"
                    value={this.state.searchItem || ''}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            {searchItem.length > 0 ? (
              <ul className="search-list">
                {filterArticles.map(artis => (
                  <li key={artis.id}>
                    <Link
                      onClick={() => this.setState({searchItem: ''})}
                      to={`/post/${artis.art_title_slug}`}>
                      {artis.art_title.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
