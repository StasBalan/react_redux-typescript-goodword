import { FavoritesCards } from './actions/localStorage/types';

interface LocalStorageInterface {
    favorites: FavoritesCards
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        console.log('serializedState', serializedState);
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch (err) {
        return undefined;
    }
};

export const saveState = (state: LocalStorageInterface) => {
    console.log('сохраняем стейт в localStorage', state)
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        //Ignore write errors.
    }
};