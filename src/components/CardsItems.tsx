import React, { Component } from 'react';

interface CardsItemsProps {
    card: any[];
}

class CardsItems extends Component<CardsItemsProps> {
    render(){
        const { card } = this.props;
        
        const elementsCard = card.map((el, index) => {
            return (
                <li key={index}>
                    <p>{el.title}</p>
                    <p>{el.description}</p>
                </li>
            );
        });
        return(
            <ul>
                {elementsCard}
            </ul>
        );
    }
}

export default CardsItems;