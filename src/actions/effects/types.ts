export const SAVE_CARD_DATA = 'SAVE_CARD_DATA';

export interface CardDataState {
    title: string;
    description: string;
}

export interface CardDataArray {
    cardData: CardDataState[]
}

interface CardDataAction {
    type: typeof SAVE_CARD_DATA;
    payload: CardDataState[];
}

export type CardDataActionType = CardDataAction;