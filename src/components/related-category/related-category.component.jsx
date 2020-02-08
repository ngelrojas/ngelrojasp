import React from "react"
import {Link} from "react-router-dom"
import "./related-category.styles.scss"

export const RelatedCategory = props => {
  return (
    <div className="category-related-content">
      <div className="head">
        <h1>Post Related</h1>
      </div>
      <div className="body">
        <ul>
          {props.data_related.map(rel => (
            <li key={rel.idarticle}>
              <Link to={`/post/${rel.art_title_slug}`}>{rel.art_title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
