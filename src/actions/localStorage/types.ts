export const SAVE_IN_FAVORITES = 'SAVE_IN_FAVORITES';

export interface FavoritesState {
    title: string;
    description: string;
}

interface saveInFavoritesAction {
    type: typeof SAVE_IN_FAVORITES;
    payload: FavoritesState[];
}

export type FavoritesActionType = saveInFavoritesAction;
