import React from 'react'
import {Link} from 'react-router-dom'
import NextComponent from './assets/next.component.jsx'
import {FavBtn} from '../favbtn/favbtn.component.jsx'
import {useLocalStorage} from '../../hooks/LocalStorage.component.jsx'
import './article.styles.scss'

export const Article = ({
  id,
  art_title,
  art_title_slug,
  art_excerpt,
  created_at,
}) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleClick = e => {
    e.preventDefault()
    setLiked(!liked)
  }

  return (
    <div className="wrap-art">
      <div className="wrapper-art-item">
        <div className="art-item-head">
          <h6>
            <Link to={`/post/${art_title_slug}`}>
              {art_title.toUpperCase()}
            </Link>
          </h6>
          <div className="art-item-author">
            <p className="art author">
              <span className="title-author">author</span>:
              <span className="content-author"> angel rojas</span>
            </p>
            <p className="art data">
              <span className="title-author">data</span>:
              <span className="content-author"> {created_at}</span>
            </p>
          </div>
        </div>
        <div className="art-item-excerpt">
          <p>
            <Link to={`/post/${art_title_slug}`}>{art_excerpt}</Link>
          </p>
        </div>
        <div className="art-item-links">
          <ul className="list-links">
            <li className="links-item">
              <FavBtn
                className="icon-link"
                liked={liked}
                onClick={handleClick}
              />
            </li>
            <li className="links-item">
              <Link to={`/post/${art_title_slug}`}>
                <NextComponent className="icon-link" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
