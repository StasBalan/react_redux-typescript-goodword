import { SHOWING_CARDS, LoaderActionTypes } from './types';

export function isLoading(payload: Boolean): LoaderActionTypes {
    return {
        type: SHOWING_CARDS,
        payload: payload
    }
}