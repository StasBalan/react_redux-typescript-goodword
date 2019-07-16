import React from 'react';

import { AppState } from '../store/store';
import { connect } from 'react-redux';

interface FavoritesState {
    title: string;
    description: string;
}

interface FavoritesProps {
    favorites: FavoritesState[];
}

class Favorites extends React.Component<FavoritesProps> {

    private renderFavorites = (favorites: FavoritesState[]) => (
        favorites.map((el, index) => {
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
    )
        


    render() {
        const { favorites } = this.props; 

        console.log('favorites', favorites);
        const elementsFavorites = favorites && favorites.length ? this.renderFavorites(favorites) : <h3>add something...</h3>;
        console.log('elementsFavorites', elementsFavorites);

        return (
            <div>
                <h1>Favorites Card</h1>
                {elementsFavorites}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    favorites: state.favorites.favoritesCards
});

export default connect(mapStateToProps, null)(Favorites);