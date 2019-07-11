export const SHOWING_CARDS = 'SHOWING_CARDS';

export interface LoaderState {
    loader: Boolean;
} 

interface showingCardsAction {
    type: typeof SHOWING_CARDS;
    payload: Boolean
}

export type LoaderActionTypes = showingCardsAction;