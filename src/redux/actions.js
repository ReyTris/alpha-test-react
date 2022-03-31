import ApiService from "../http/api"
import {SET_ALL_CARDS, SET_LIKE, DELETED_CARD, SET_LIKE_CARDS} from './actionTypes'

export const getCards = () => {
    return async (dispatch) => {
        const response = await ApiService.getCatBreeds()
        dispatch(setAllCards(response))
    } 
}

export const setAllCards = (cards) => ({type: SET_ALL_CARDS, payload: cards})
export const setLike = (id) => ({type: SET_LIKE, payload: id})
export const deletedCard = (id) => ({type: DELETED_CARD, payload: id})
export const setLikeCards = () => ({type: SET_LIKE_CARDS})