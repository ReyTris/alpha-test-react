import React from 'react'
import { useSelector } from 'react-redux'

const Header = ({likeFilter}) => {
    const likeFilterOpen = useSelector(state => state.main.filter)
  return (
        <div className="header">
            <div className={likeFilterOpen ? "likeFilter--open" : "likeFilter"} onClick={() => likeFilter()}>
                <img src="images/like.png" alt="" />
            </div>
        </div>
  )
}

export default Header