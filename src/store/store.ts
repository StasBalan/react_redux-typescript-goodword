import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { vocabularyReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    vocabulary: vocabularyReducer
})

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>