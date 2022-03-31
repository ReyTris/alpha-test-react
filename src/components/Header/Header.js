import React from 'react'

const Header = ({likeFilter}) => {
  return (
        <div className="header">
            <div className="likeFilter" onClick={() => likeFilter()}>
                <img src="images/like.png" alt="" />
            </div>
        </div>
  )
}

export default Header