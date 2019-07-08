import { VocabularyArray, FILTER_VOCABULARY, ADD_WORD_TO_VOCABULARY, VocabularyActionTypes } from '../actions/types';

const initialState: VocabularyArray = {
    vocabulary: ['bad', 'star', 'bed', 'say', 'beautiful', 'through', 'against', 'cake']
}

export function vocabularyReducer(state = initialState, action: VocabularyActionTypes): VocabularyArray {
    switch(action.type) {
        case FILTER_VOCABULARY:
            return {
                ...state
            };
        case  ADD_WORD_TO_VOCABULARY: 
            return {
                ...state
            };
        default:
            return state;    
    }
}