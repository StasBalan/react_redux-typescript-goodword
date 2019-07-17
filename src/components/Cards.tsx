import React, { Component } from 'react';

import { AppState } from '../store/store';
import CardsItems from './CardsItems';
import Header from './Header';

import { connect } from 'react-redux';
import { isLoading } from '../actions/loader/actions';
import { fetchNewWords } from '../actions/effects/fetchNewWords';
import { CardDataState } from '../actions/effects/types';

interface CardsState {
    wordsFromServer: Object;
}

interface AppProps {
    wordToLearn: string[];
    loader: Boolean;
    isLoading: (bool: Boolean) => void;
    fetchNewWords: (array: string[]) => void;
    cardData: CardDataState[]
}

class Cards extends Component<AppProps, CardsState> {

    state: CardsState = {
       wordsFromServer: {}, 
    }

    private onShow = () => {
        const {wordToLearn} = this.props;
        const {wordsFromServer} = this.state;
        
        const storedWords = Object.keys(wordsFromServer);
        const newWords = wordToLearn.filter(word => !storedWords.includes(word))
      
        console.log('пришел массив в Cards: ', wordToLearn);
      
        // проверить есть ли новые слова у нас в локальном стейте
        this.props.fetchNewWords(newWords);
    }

    render() {
        console.log('props', this.props);
        const { loader, cardData } = this.props;
        

        return(
            <div className='card'>
                <Header/>
                <div className='container'>
                    <div className='page__header'>
                        <i className="material-icons">list_alt</i>
                        <h2 className='subtitle'>Cards</h2>
                    </div>
                    <div className='card__inner'>
                        <button className='card__button' onClick={this.onShow}>Show</button>
                        {loader? <div className='box-loader'><span className="load"/></div> : <CardsItems card={cardData}/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    wordToLearn: state.vocabulary.wordToLearn,
    loader: state.loader.loader,
    cardData: state.cardData.cardData 
})

export default connect(mapStateToProps, { isLoading, fetchNewWords}) (Cards);