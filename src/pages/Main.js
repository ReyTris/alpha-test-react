import React from 'react'
import { useDispatch } from 'react-redux'
import CardList from '../components/CardsList/CardList'
import Header from '../components/Header/Header'
import { setLikeCards } from '../redux/actions'

const Main = () => {
    const dispatch = useDispatch()

    function likeFilter() {
        dispatch(setLikeCards())
    }
    return (
        <div className='main'>
            <Header likeFilter={likeFilter}/>
            <CardList/>
        </div>
    )
}

export default Main