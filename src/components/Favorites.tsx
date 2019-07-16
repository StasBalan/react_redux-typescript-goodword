import React from 'react';

import { AppState } from '../store/store';
import { connect } from 'react-redux';
import { FavoritesState } from '../actions/localStorage/types';

interface FavoritesProps {
    favorites: FavoritesState[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
    const elementsFavorites = favorites.map((el, index) => {
        return (
            <li key={index} style={{listStyle: 'none',
                                    width: '300px',
                                    backgroundColor: '#282c34', 
                                    color: '#ffffff',
                                    padding: '5px',
                                    margin: '10px auto'}}>
                <p>{el.title}</p>
                <p>{el.description}</p>
            </li>
        );
    })
    return (
        <ul>
            {elementsFavorites}
        </ul>
    );
}

const mapStateToProps = (state: AppState) => ({
    favorites: state.favorites.favoritesCards
});

export default connect(mapStateToProps, null)(Favorites);