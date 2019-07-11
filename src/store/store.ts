import { combineReducers } from 'redux';
import { createStore, compose } from 'redux';
import { vocabularyReducer } from '../reducers/vocabularyReducer';
import { loaderReducer } from '../reducers/loaderReducer';

const rootReducer = combineReducers({
    vocabulary: vocabularyReducer,
    loader: loaderReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
  }
   
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type AppState = ReturnType<typeof rootReducer>