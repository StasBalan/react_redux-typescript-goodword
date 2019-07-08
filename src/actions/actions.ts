import { Vocabulary, FILTER_VOCABULARY, ADD_WORD_TO_VOCABULARY, VocabularyActionTypes } from './types';

export function filterVocabulary(newVocabulary: Vocabulary):VocabularyActionTypes {
    return {
        type: FILTER_VOCABULARY,
        payload: newVocabulary
    }
}

export function addWordToVocabulary(payload: Vocabulary):VocabularyActionTypes {
    return {
        type: ADD_WORD_TO_VOCABULARY,
        payload: payload
    }
}