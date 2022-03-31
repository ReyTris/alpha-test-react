import React from 'react'
import Like from '../buttons/Like'

import style from './Card.module.css'

const Card = ({image, name, wiki, id, closeCard, likeCard, like}) => {
  return (
    <div className={style.card}>
        <img 
            src="images/close.png"
            alt='close'
            className={style.close}
            onClick={() => closeCard(id)}
            />
        <img src={image} className={style.cardImage} alt="Kitty"></img>
        <div className={style.info}>
            <div className={style.cardTitle}>{name}</div>
            <a href={wiki} className={style.cardLink}>Больше информации (Wiki)</a>
            <Like like={like} likeCard={likeCard} id={id}/>
        </div>
    </div>
  )
}

export default Card