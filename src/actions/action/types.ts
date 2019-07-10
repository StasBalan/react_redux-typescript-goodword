export const SHOWING_CARDS = 'SHOWING_CARDS';

interface showingCardsAction {
    type: typeof SHOWING_CARDS;
    payload: Boolean;
}

export type LoaderActionTypes = showingCardsAction;