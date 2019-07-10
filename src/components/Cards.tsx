import React, { Component } from 'react';

import { AppState } from '../store/store';

import { connect } from 'react-redux';
import { showingCards } from '../actions/loader/actions';



interface AppProps {
    wordToLearn: string[];
    loader: Boolean;
    showingCards: () => void;
}

class Cards extends Component<AppProps> {

    componentDidMount() {
        const wordToLearn = this.props.wordToLearn;
        const key = 'b94e78e4-8545-4c28-bd32-2b331aede418';
        wordToLearn.forEach((el) => {
            fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${key}`)
            .then(() => this.props.showingCards());
        })
    }

    render() {
        const { loader } = this.props;

        return(
            <div>
                {loader ? <div>Loading...</div>:<CardsItems/>}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    wordToLearn: state.vocabulary.wordToLearn 
})

export default connect(mapStateToProps, { showingCards }) (Cards);