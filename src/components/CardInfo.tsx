import React, { Component } from 'react';

interface CardInfoProps {
    cardInfoTitle: string;
    cardInfoDescription: string;
}

class CardInfo extends Component<CardInfoProps> {
    render() {
        const { cardInfoTitle, cardInfoDescription } = this.props;
        return(
            <div>
                <h1>Card Info</h1>
                <p>{cardInfoTitle}</p>
                <p>{cardInfoDescription}</p>
            </div>
        );
    }
}

export default CardInfo;