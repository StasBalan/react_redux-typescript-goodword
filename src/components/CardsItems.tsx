import React, { Component } from 'react';

interface CardsItemsProps {
    card: any[];
}

const CardsItems: React.FC<CardsItemsProps> = ({card}) => {
        
    const elementsCard = card.map((el, index) => {
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
    });
    
    return(
        <ul>
            {elementsCard}
        </ul>
    );
}

export default CardsItems;