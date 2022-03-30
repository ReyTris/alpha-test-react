import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CardList from '../components/CardsList/CardList'
import CardListFilter from '../components/CardsList/CardListFilter'
import Header from '../components/Header/Header'
import { setLikeCards, setShowAll } from '../redux/actions'

const Main = () => {
    const dispatch = useDispatch()
    const [showFilter, setShowFilter] = useState(false)

    function likeFilter() {
        dispatch(setLikeCards())
        setShowFilter(true)
    }
    function showAll() {
        dispatch(setShowAll())
        setShowFilter(false)
    }

    function FilterPage({showFilter}) {
        if (showFilter) {
            return <CardListFilter/>
        }
        return <CardList/>
    }
    return (
        <div className='main'>
            <Header likeFilter={likeFilter} showAll={showAll}/>
            <FilterPage showFilter={showFilter}/>
        </div>
    )
}

export default Main