
import {SET_ALL_CARDS, SET_LIKE, DELETED_CARD, SET_LIKE_CARDS, SET_SHOW_ALL} from './actionTypes'

const initialState = {
    cards: [],
    cardsFilter: []
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_CARDS:
            return {
                ...state,
                cards: action.payload.map( item => ({ 
                    id: item.id,
                    name: item.name,
                    wiki: item.wikipedia_url,
                    image: item.image,
                    like: false
                }))
            }
            
        case SET_LIKE:
            return {
                ...state,
                cards: state.cards.map( item => {
                    if (item.id === action.payload && !item.like) {
                        return {
                            ...item,
                            like: true
                        }
                    } else if (item.id === action.payload && item.like) {
                        return {
                            ...item,
                            like: false
                        }
                    }
                    return item
                }),
                cardsFilter: state.cardsFilter.map( item => {
                    if (item.id === action.payload && !item.like) {
                        return {
                            ...item,
                            like: true
                        }
                    } else if (item.id === action.payload && item.like) {
                        return {
                            ...item,
                            like: false
                        }
                    }
                    return item
                })
            }

        case DELETED_CARD:
            return {
                ...state,
                cards: state.cards.filter(item => item.id !== action.payload),
                cardsFilter: state.cardsFilter.filter(item => item.id !== action.payload),
            }

        case SET_LIKE_CARDS:
            return {
                ...state,
                cardsFilter: state.cards.filter(item => item.like),
            }

        case SET_SHOW_ALL:
            return {
                ...state,
                cards: state.cards
            }

        default:
            return state
    }
}