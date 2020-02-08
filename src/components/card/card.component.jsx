import React from 'react'
import {Link} from 'react-router-dom'
import './card.styles.scss'

export const Card = ({id, cat_title, cat_title_slug, description}) => {
  return (
    <section className="topic-card">
      <div className="card-header">
        <Link to={`/topic/${cat_title_slug}`}>
          <h1>{cat_title}</h1>
        </Link>
      </div>
      <div className="card-body">
        <div className="pragraph">
          <Link to={`/topic/${cat_title_slug}`}>
            <p>{description}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
