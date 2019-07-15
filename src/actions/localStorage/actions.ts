import {SAVE_IN_FAVORITES, FavoritesState, FavoritesActionType} from './types';

export function saveInFavorites(payload: FavoritesState[]): FavoritesActionType {
    return {
        type: SAVE_IN_FAVORITES,
        payload: payload
    }
}