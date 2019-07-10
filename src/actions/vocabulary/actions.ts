import { FILTER_VOCABULARY, ADD_WORD_TO_VOCABULARY, VocabularyActionTypes } from './types';

export function filterVocabulary(newVocabulary: string[]):VocabularyActionTypes {
    return {
        type: FILTER_VOCABULARY,
        payload: newVocabulary
    }
}

export function addWordToVocabulary(wordToLearn: string[]):VocabularyActionTypes {
    return {
        type: ADD_WORD_TO_VOCABULARY,
        payload: wordToLearn
    }
}