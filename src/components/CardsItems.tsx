import React, { Component } from 'react';

import CardInfo from '../components/CardInfo';

interface Card {
    title: string;
    description: string;
}

interface CardsItemsProps {
    card: any[];
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

    render() {
        const { card } = this.props;
        const { isShowingCardInfo, cardInfoTitle, cardInfoDescription } = this.state;

        const elementsCard = card.map((el, index) => {
            return (
                <li onClick={() => this.handleOpenCardInfo(el)} key={index} style={{listStyle: 'none',
                                        width: '300px',
                                        backgroundColor: '#282c34', 
                                        color: '#ffffff',
                                        padding: '5px',
                                        margin: '10px auto'}}>
                    <p>{el.title}</p>
                    <p>{el.description}</p>
                </li>
            );
        });
        
        return(
            <>
                <ul>
                    {elementsCard}
                </ul>
                {isShowingCardInfo ? <CardInfo title={cardInfoTitle} description={cardInfoDescription}/> : null}
            </>    
        );
    }
}

export default CardsItems;