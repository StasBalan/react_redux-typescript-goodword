export const FILTER_VOCABULARY = 'FILTER_VOCABULARY';
export const ADD_WORD_TO_VOCABULARY = 'ADD_WORD_TO_VOCABULARY';

export interface Vocabulary {
    title: string;
    id: number;
};

interface FilterVocabularyAction {
    type: typeof FILTER_VOCABULARY;
    payload: Vocabulary[];
};

interface AddWordToVocabuldaryAction {
    type: typeof ADD_WORD_TO_VOCABULARY;
}

export type VocabularyActionTypes = FilterVocabularyAction | AddWordToVocabuldaryAction;