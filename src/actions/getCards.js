import ApiService from "../http/api"
import { setAllCards } from "../redux/mainReducer"

export const getCards = () => {
    return async (dispatch) => {
        const response = await ApiService.getCatBreeds()
        dispatch(setAllCards(response))
    } 
}