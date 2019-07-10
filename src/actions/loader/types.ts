export const SHOWING_CARDS = 'SHOWING_CARDS';

export interface LoaderState {
    loader: Boolean;
} 

interface showingCardsAction {
    type: typeof SHOWING_CARDS;
}

export type LoaderActionTypes = showingCardsAction;