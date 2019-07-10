import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { vocabularyReducer } from '../reducers/vocabularyReducer';
import { loaderReducer } from '../reducers/loaderReducer';

const rootReducer = combineReducers({
    vocabulary: vocabularyReducer,
    loader: loaderReducer
})

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>