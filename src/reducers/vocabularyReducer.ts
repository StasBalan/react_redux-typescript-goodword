import { VocabularyState, FILTER_VOCABULARY, ADD_WORD_TO_VOCABULARY, VocabularyActionTypes } from '../actions/vocabulary/types';

const initialState: VocabularyState = {
    vocabulary: ['bad', 'star', 'bed', 'say', 'beautiful', 'through', 'against', 'cake'],
    wordToLearn: []
}

export function vocabularyReducer(state = initialState, action: VocabularyActionTypes): VocabularyState {
    switch(action.type) {
        case FILTER_VOCABULARY:
            return {
                ...state
            };
        case  ADD_WORD_TO_VOCABULARY: 
            return {
                ...state,
                wordToLearn: [...state.wordToLearn, ...action.payload]               
            };
        default:
            return state;    
    }
}