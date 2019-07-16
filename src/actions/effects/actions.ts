import { SAVE_CARD_DATA, CardDataState, CardDataActionType } from './types';

export function saveCardData(payload: CardDataState[]): CardDataActionType {
    return {
        type: SAVE_CARD_DATA,
        payload: payload
    }
}