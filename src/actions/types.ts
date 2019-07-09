export const FILTER_VOCABULARY = 'FILTER_VOCABULARY';
export const ADD_WORD_TO_VOCABULARY = 'ADD_WORD_TO_VOCABULARY';

// voc = ['bad', 'sds']
// word = []

// export interface Vocabulary {
//     [index: number]: string;
//     length: number; //?
// }

// export interface VocabularyArray {
    
// }

// export interface WordToLearnArray {
    
// }

export interface VocabularyState {
    vocabulary: string[];
    wordToLearn: string[];
}

interface FilterVocabularyAction {
    type: typeof FILTER_VOCABULARY;
    payload: string[];
};

interface AddWordToVocabuldaryAction {
    type: typeof ADD_WORD_TO_VOCABULARY;
    payload: string[];
}

export type VocabularyActionTypes = FilterVocabularyAction | AddWordToVocabuldaryAction;