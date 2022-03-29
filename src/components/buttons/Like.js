import React from 'react'

import style from './Like.module.css'

const Like = ({like, likeCard, id}) => {
  return (
    <div className={style.like}  onClick={() => likeCard(id)}>
        <img src={like ? "/images/like.png" : "/images/unlike.png"} alt="" />
    </div>
  )
}

export default Like