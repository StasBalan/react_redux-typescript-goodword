import { combineReducers } from 'redux';
import { createStore, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { vocabularyReducer } from '../reducers/vocabularyReducer';
import { initialState } from '../reducers/vocabularyReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';
import { loaderReducer } from '../reducers/loaderReducer';
import { saveCardDataReducer } from '../reducers/saveCardDataReducer';
import { loadState, saveState } from '../localStorage';


const rootReducer = combineReducers({
    vocabulary: vocabularyReducer,
    loader: loaderReducer,
    favorites: favoritesReducer,
    cardData: saveCardDataReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
  }
   
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState() || initialState.vocabulary; 
console.log('persistedState', persistedState);

export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)) );

store.subscribe(() => {
  saveState({favorites: store.getState().favorites})
});

export type AppState = ReturnType<typeof rootReducer>