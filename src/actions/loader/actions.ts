import { SHOWING_CARDS, LoaderActionTypes } from './types';

export function showingCards(): LoaderActionTypes {
    return {
        type: SHOWING_CARDS
    }
}