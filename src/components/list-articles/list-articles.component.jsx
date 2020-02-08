import React from 'react'
import {Article} from '../article/article.component.jsx'
import './list-articles.styles.scss'

export const ListArticles = props => {
  return (
    <div className="wrap-list-articles">
      <div className="list-articles">
        {props.data_post.map(posts => (
          <Article key={posts.id || posts.idarticle} {...posts} />
        ))}
      </div>
    </div>
  )
}
