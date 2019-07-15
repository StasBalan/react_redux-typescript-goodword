export const SAVE_IN_FAVORITES = 'SAVE_IN_FAVORITES';

export interface FavoritesState {
    title: string;
    description: string;
}

export interface FavoritesCards {
    favoritesCards: FavoritesState[]
}

interface saveInFavoritesAction {
    type: typeof SAVE_IN_FAVORITES;
    payload: FavoritesCards;
}

export type FavoritesActionType = saveInFavoritesAction;
