import React, { Component } from 'react';

import { KEY_FOR_PHOTO_API } from '../constants/constants';

interface CardInfoProps {
    cardTitle: string;
    cardDescription: string;
}

interface CardInfoState {
    cardInfoSrcforImg: string;
}

class CardInfo extends Component<CardInfoProps, CardInfoState> {

    state: CardInfoState = {
        cardInfoSrcforImg: ''
    }

    componentDidMount() {
        const { cardTitle } = this.props;
        fetch(`https://api.unsplash.com/search/photos?client_id=${KEY_FOR_PHOTO_API}&query=${cardTitle}`)
            .then((res: any) => res.json())
            .then((data) => this.setState({cardInfoSrcforImg: data.results[0].urls.small}))
    }
    

    render() {
        const { cardTitle, cardDescription } = this.props;
        const { cardInfoSrcforImg } = this.state;

        return(
            <div>
                <h1>Card Info</h1>
                <img src={cardInfoSrcforImg} alt={cardInfoSrcforImg}/>
                <p>{cardTitle}</p>
                <p>{cardDescription}</p>
            </div>
        );
    }
}

export default CardInfo;