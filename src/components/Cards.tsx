import React, { Component } from 'react';

import { AppState } from '../store/store';
import CardsItems from './CardsItems';
import Header from './Header';
// import { KEY } from '../constants/constants';

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

    // private onShowFetching = (data: any[], key: string) => {
    //     const {wordsFromServer, card} = this.state;
        
    //     const newCard: any[] = [];
    //     const serverResponse = data[0]
  
    //     // console.log('массив fetchingArray: ', fetchingArray); 
    //     // console.log('массив с датой 0: ', data[0]);
    //     // console.log('array with data: ', data);     
        
    //     card.push({title: serverResponse.meta.stems[0], description: serverResponse.shortdef[0]})
       
    //     // console.log('массив card: ', card);
    //     this.setState({
    //         card: [...card, ...newCard],
    //         wordsFromServer: {
    //             ...wordsFromServer,
    //             [key]: data[0]
    //         }
    //     });

    //     if(this.state.card) {
    //         this.props.isLoading(false);
    //     }
    // }

    render() {
        console.log('props', this.props);
        const { loader, cardData } = this.props;
        

        return(
            <div>
                <Header/>
                <button onClick={this.onShow}>Show</button>
                {loader? <h1>loading...</h1> : <CardsItems card={cardData}/>}
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