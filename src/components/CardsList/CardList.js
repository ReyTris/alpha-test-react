import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'

import style from './CardList.module.css'
import { deletedCard, setLike, getCards } from '../../redux/actions'

const CardList = () => {
    const dispatch = useDispatch()
    const listCats = useSelector(state => {
        if (state.main.filter) {
            return state.main.cardsFilter
        }
        return state.main.cards
    })

    
    function closeCard(id) {
        dispatch(deletedCard(id))
    }

    function likeCard(id) {
        dispatch(setLike(id))
    }

    useEffect(() => {
        dispatch(getCards())
    }, [])
    
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

export default CardList