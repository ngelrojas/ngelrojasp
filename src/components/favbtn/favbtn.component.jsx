import React from 'react'
import {Link} from 'react-router-dom'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'

export const FavBtn = ({liked, onClick}) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Link to="#" onClick={onClick}>
      <Icon color="#9F4747" size="28px" />
    </Link>
  )
}
