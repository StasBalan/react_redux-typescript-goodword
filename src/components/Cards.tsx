import React, { Component } from 'react';

import { AppState } from '../store/store';
import CardsItems from './CardsItems';
import { KEY } from '../constants/constants';

import { connect } from 'react-redux';
import { showingCards } from '../actions/loader/actions';

interface CardsState {
    wordsFromServer: Object;
    card: any[];
}

interface AppProps {
    wordToLearn: string[];
    loader: Boolean;
    showingCards: (bool: Boolean) => void;
}

class Cards extends Component<AppProps, CardsState> {

    state: CardsState = {
       wordsFromServer: {}, 
       card: [] 
    }

    private onShow = () => {
        const {wordToLearn} = this.props;
        const {wordsFromServer} = this.state;
        
        const storedWords = Object.keys(wordsFromServer);
        const newWords = wordToLearn.filter(word => !storedWords.includes(word))
      
        console.log('пришел массив в Cards: ', wordToLearn);
      
        // проверить есть ли новые слова у нас в локальном стейте
        newWords.forEach((el: string) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${KEY}`)
                .then((res: any) => res.json())
                .then((data) => this.onShowFetching(data, el))
        })
    }

    private onShowFetching = (data: any[], key: string) => {
        const {wordsFromServer, card} = this.state;
        
        const newCard: any[] = [];
        const serverResponse = data[0]
  
        // console.log('массив fetchingArray: ', fetchingArray); 
        // console.log('массив с датой 0: ', data[0]);
        // console.log('array with data: ', data);     
        
        card.push({title: serverResponse.meta.stems[0], description: serverResponse.shortdef[0]})
       
        // console.log('массив card: ', card);
        this.setState({
            card: [...card, ...newCard],
            wordsFromServer: {
                ...wordsFromServer,
                [key]: data[0]
            }
        });

        if(this.state.card) {
            this.props.showingCards(false);
        }
    }

    render() {
        const { loader } = this.props;
        const { card } = this.state;

        return(
            <div>
                <button onClick={this.onShow}>Show</button>
                {loader? <h1>loading...</h1> : <CardsItems card={card}/>}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    wordToLearn: state.vocabulary.wordToLearn,
    loader: state.loader.loader 
})

export default connect(mapStateToProps, { showingCards }) (Cards);