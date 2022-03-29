import React from 'react'

const Header = ({likeFilter, showAll}) => {
  return (
        <div className="header">
            <div className="likeFilter" onClick={() => likeFilter()}>
                <img src="images/like.png" alt="" />
            </div>
            <div className="header__all" onClick={() => showAll()}>ALL</div>
        </div>
  )
}

export default Header