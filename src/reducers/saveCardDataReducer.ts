import { SAVE_CARD_DATA, CardDataActionType, CardDataArray } from '../actions/effects/types';

const initialState: CardDataArray = {
    cardData: []
}

export function saveCardDataReducer (state = initialState, actions: CardDataActionType):CardDataArray {
    console.log('actions', actions);
    switch(actions.type) {
        case SAVE_CARD_DATA: 
            return {
                ...state,
                cardData: [...state.cardData, ...actions.payload]
            } 
        default: 
            return state;    
    }
}

