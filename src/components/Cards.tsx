import React, { Component } from 'react';

import { AppState } from '../store/store';
import CardsItems from './CardsItems';
import { KEY } from '../constants/constants';

import { connect } from 'react-redux';
import { showingCards } from '../actions/loader/actions';

interface CardsState {
    card: any[]
}

interface AppProps {
    wordToLearn: string[];
    loader: Boolean;
    showingCards: () => void;
}

class Cards extends Component<AppProps, CardsState> {

    state: CardsState = {
       card: [] 
    }

    private onShow = () => {
        const wordToLearn = this.props.wordToLearn;
        console.log('пришел массив в Cards: ', wordToLearn);
        wordToLearn.forEach((el) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${KEY}`)
                .then((res: any) => res.json())
                .then((data) => this.onShowFetching(data));
        })
    }

    private onShowFetching = (arr: any[]) => {
        const fetchingArray: any[] = [];
        const card: any[] = [];
        fetchingArray.push(arr[0]);  
        console.log('массив fetchingArray: ', fetchingArray, arr[0]);      
        fetchingArray.forEach((el) => {
           card.push({title: el.meta.stems[0], description: el.shortdef[0]})
        });
        console.log('массив card: ', card);
        this.setState({
            card: card
        });
    }

    render() {
        const { loader } = this.props;
        const { card } = this.state;

        return(
            <div>
                <button onClick={this.onShow}>Show</button>
                <CardsItems card={card}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    wordToLearn: state.vocabulary.wordToLearn,
    loader: state.loader.loader 
})

export default connect(mapStateToProps, { showingCards }) (Cards);