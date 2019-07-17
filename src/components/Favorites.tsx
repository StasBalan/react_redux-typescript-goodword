import React from 'react';

import Header from './Header';

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
                    <li key={index} className='cards-list__items'>
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
            <div className='favorites'>
                <Header/>
                <div className='container'>
                    <div className='page__header'>
                        <i className="material-icons">star</i>
                        <h2 className='subtitle'>Favorites Cards</h2>
                    </div>
                    <div className='favorites__inner'>
                        {elementsFavorites}
                    </div> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    favorites: state.favorites.favoritesCards
});

export default connect(mapStateToProps, null)(Favorites);