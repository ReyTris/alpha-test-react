import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'

import style from './CardList.module.css'
import { deletedCard, setLike } from '../../redux/actions'

const CardListFilter = () => {
    const dispatch = useDispatch()
    const listCats = useSelector(state => state.main.cardsFilter)

    
    function closeCard(id) {
        dispatch(deletedCard(id))
    }

    function likeCard(id) {
        dispatch(setLike(id))
    }
    
  return (
    <div className={style.cardList}>
        {
            listCats.map(item => {
                return (
                    <Card
                        image={item.image ? item.image.url : 'images/fake.jpg'}
                        name={item.name}
                        wiki={item.wiki}
                        key={item.id}
                        id={item.id}
                        closeCard={closeCard}
                        likeCard={likeCard}
                        like={item.like}
                    />
                )
            })
        }
    </div>
  )
}

export default CardListFilter