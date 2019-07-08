export const FILTER_VOCABULARY = 'FILTER_VOCABULARY';
export const ADD_WORD_TO_VOCABULARY = 'ADD_WORD_TO_VOCABULARY';

// voc = ['bad', 'sds']
// word = []

export interface Vocabulary {
    [index: number]: string;
    length: number; //?
}

interface FilterVocabularyAction {
    type: typeof FILTER_VOCABULARY;
    payload: Vocabulary;
};

interface AddWordToVocabuldaryAction {
    type: typeof ADD_WORD_TO_VOCABULARY;
    payload: Vocabulary;
}

export type VocabularyActionTypes = FilterVocabularyAction | AddWordToVocabuldaryAction;