import { SAVE_IN_FAVORITES, FavoritesCards, FavoritesActionType } from '../actions/localStorage/types';

const initialState: FavoritesCards = {
    favoritesCards: []
}

export function favoritesReducer(state = initialState, actions: FavoritesActionType): FavoritesCards {
    switch(actions.type) {
        case SAVE_IN_FAVORITES:
            return {
                ...state
            }
        default:
            return state;    
    }
}