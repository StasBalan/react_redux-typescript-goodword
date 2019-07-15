import { FavoritesState } from './actions/localStorage/types';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch (err) {
        return undefined;
    }
};

export const saveState = (state: FavoritesState[]) => {
    console.log('сохраняем стейт в localStorage', state)
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        //Ignore write errors.
    }
};