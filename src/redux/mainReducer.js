
const SET_ALL_CARDS = 'SET_ALL_CARDS';
const SET_LIKE = 'SET_LIKE';
const DELETED_CARD = 'DELETED_CARD';
const SET_LIKE_CARDS = 'SET_LIKE_CARDS';
const SET_SHOW_ALL = 'SET_SHOW_ALL';

const initialState = {
    cards: [],
    cardsFilter: []
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_CARDS:
            return {
                ...state,
                cards: action.payload.map( item => ({...state.cards, 
                    id: item.id,
                    name: item.name,
                    wiki: item.wikipedia_url,
                    image: item.image,
                    like: false
                }))
            }
            
        case SET_LIKE:
            return {
                ...state.cards,
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
                })
            }

        case DELETED_CARD:
            return {
                ...state.cards,
                cards: state.cards.filter(item => item.id !== action.payload),
                cardsFilter: state.cards
            }

        case SET_LIKE_CARDS:
            return {
                ...state.cards,
                cards: state.cards.filter(item => item.like),
                cardsFilter: state.cards
            }

        case SET_SHOW_ALL:
            return {
                ...state.cards,
                cards: state.cardsFilter
            }

        default:
            return state
    }
}

export const setAllCards = (cards) => ({type: SET_ALL_CARDS, payload: cards})
export const setLike = (id) => ({type: SET_LIKE, payload: id})
export const deletedCard = (id) => ({type: DELETED_CARD, payload: id})
export const setLikeCards = () => ({type: SET_LIKE_CARDS})
export const setShowAll = () => ({type: SET_SHOW_ALL})