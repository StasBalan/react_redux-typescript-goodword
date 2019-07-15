import {SAVE_IN_FAVORITES, FavoritesCards, FavoritesActionType} from './types';

export function saveInFavorites(payload: FavoritesCards): FavoritesActionType {
    return {
        type: SAVE_IN_FAVORITES,
        payload: payload
    }
}