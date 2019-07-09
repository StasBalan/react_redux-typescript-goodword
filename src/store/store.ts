import { combineReducers } from 'redux';
import { vocabularyReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    vocabulary: vocabularyReducer
})

export type AppState = ReturnType<typeof rootReducer>