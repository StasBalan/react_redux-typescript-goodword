import React, { Component } from 'react';

import { AppState } from '../store/store';
import CardsItems from './CardsItems';
import { KEY } from '../constants/constants';

import { connect } from 'react-redux';
import { showingCards } from '../actions/loader/actions';

interface CardsState {
    fetchingArray: any[];
    card: any[];
}

interface AppProps {
    wordToLearn: string[];
    loader: Boolean;
    showingCards: (bool: Boolean) => void;
}

class Cards extends Component<AppProps, CardsState> {

    state: CardsState = {
       fetchingArray: [], 
       card: [] 
    }

    private onShow = () => {
        const wordToLearn = this.props.wordToLearn;
        console.log('пришел массив в Cards: ', wordToLearn);
        wordToLearn.forEach((el) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${KEY}`)
                .then((res: any) => res.json())
                .then((data) => this.onShowFetching(data))
        })
    }

    private onShowFetching = (data: any[]) => {
        const fetchingArray = this.state.fetchingArray;
        const card: any[] = [];
        fetchingArray.push(data[0]);
        // console.log('массив fetchingArray: ', fetchingArray); 
        // console.log('массив с датой 0: ', data[0]);
        // console.log('array with data: ', data);     
        fetchingArray.forEach((el) => {
            // console.log('элемент shortfed: ', el.shortdef[0])
            card.push({title: el.meta.stems[0], description: el.shortdef[0]})
        });
        // console.log('массив card: ', card);
        this.setState({
            card: card
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