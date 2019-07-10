import {LoaderState, LoaderActionTypes, SHOWING_CARDS} from '../actions/loader/types';

const initialState: LoaderState = {
    loader: true
}

export function loaderReducer(state = initialState, action: LoaderActionTypes ): LoaderState {
    switch(action.type) {
        case SHOWING_CARDS:
            return {
                loader: !state.loader
            } 
        default:
            return state
    }
}