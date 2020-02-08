import React from 'react'
import {Card} from '../card/card.component.jsx'
import './list-cards.styles.scss'

export const ListCards = props => {
  return (
    <div className="list-cards">
      {props.data_cat.map(cate => (
        <Card key={cate.id} {...cate} />
      ))}
    </div>
  )
}
