import React from 'react'
import { useDispatch } from 'react-redux'
import CardList from '../components/CardsList/CardList'
import Header from '../components/Header/Header'
import { setLikeCards, setShowAll } from '../redux/mainReducer'

const Main = () => {
    const dispatch = useDispatch()
    function likeFilter() {
        dispatch(setLikeCards())
    }
    function showAll() {
        dispatch(setShowAll())
    }
    return (
        <div className='main'>
            <Header likeFilter={likeFilter} showAll={showAll}/>
            <CardList/>
        </div>
    )
}

export default Main