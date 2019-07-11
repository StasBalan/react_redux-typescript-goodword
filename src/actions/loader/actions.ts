import { SHOWING_CARDS, LoaderActionTypes } from './types';

export function showingCards(payload: Boolean): LoaderActionTypes {
    return {
        type: SHOWING_CARDS,
        payload: payload
    }
}