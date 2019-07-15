import { combineReducers } from 'redux';
import { createStore, compose } from 'redux';
import { vocabularyReducer } from '../reducers/vocabularyReducer';
import { loaderReducer } from '../reducers/loaderReducer';
import { loadState, saveState } from '../localStorage';
import { initialState } from '../reducers/vocabularyReducer';

const rootReducer = combineReducers({
    vocabulary: vocabularyReducer,
    loader: loaderReducer,
    favorites: favoritesReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
  }
   
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState() || initialState; 

export const store = createStore(rootReducer, persistedState, composeEnhancers());

store.subscribe(() => {
  saveState({FavoritesCards: store.getState().favorites})
});

export type AppState = ReturnType<typeof rootReducer>