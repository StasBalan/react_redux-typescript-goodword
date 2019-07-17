import React, { Component } from 'react';

import { saveInFavorites } from '../actions/localStorage/actions';
import { connect } from 'react-redux';

import { FavoritesState } from '../actions/localStorage/types';

import  CardInfo  from './CardInfo';
 
interface Card {
    title: string;
    description: string;
}

interface CardsItemsProps {
    card: Card[];
    saveInFavorites: (el: FavoritesState[]) => void;
}

interface CardsItemsState {
    isShowingCardInfo: Boolean;
    cardInfoTitle: string;
    cardInfoDescription: string;
}

class CardsItems extends Component<CardsItemsProps, CardsItemsState> {
    
    state: CardsItemsState = {
        isShowingCardInfo: false,
        cardInfoTitle: '',
        cardInfoDescription: ''
    }

    private handleOpenCardInfo = (el: Card) => {
        this.setState({
            isShowingCardInfo: true,
            cardInfoTitle: el.title,
            cardInfoDescription: el.description
        });
    }

    private onAddFavorites = (el: Card) => {
        const favorites = [];
        favorites.push({title: el.title, description: el.description});
        this.props.saveInFavorites(favorites);
    }
    render() {
        const { card } = this.props;
        const { isShowingCardInfo, cardInfoTitle, cardInfoDescription } = this.state;

        const elementsCard = card.map((el, index) => {
            return (
                <li onClick={() => this.handleOpenCardInfo(el)} key={index} className='cards-list__items'>
                    <p>{el.title}</p>
                    <p>{el.description}</p>
                    <button onClick={() => this.onAddFavorites(el)}>Add to favorites</button>
                </li>
            );
        });
        
        return(
            <>
                <ul className='cards-list'>
                    {elementsCard}
                </ul>
                {isShowingCardInfo ? <CardInfo cardTitle={cardInfoTitle} cardDescription={cardInfoDescription}/> : null}
            </>    
        );
    }
}

export default connect(null, { saveInFavorites })(CardsItems);