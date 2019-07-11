import React, { Component } from 'react';

import { INITIAL_RANGE } from '../constants/constants';
import { AppState } from '../store/store';

import { connect } from 'react-redux';
import { filterVocabulary, addWordToVocabulary } from '../actions/vocabulary/actions';


interface SettingsState {
    range: number;
};

interface AppProps {
    vocabulary: string[];
    wordToLearn?: string[];
    addWordToVocabulary: (wordToLearn: string[]) => void;
    filterVocabulary: (vocabulary: string[]) => void;
}

class Settings extends Component<AppProps, SettingsState> {

    state: SettingsState = {
        range: INITIAL_RANGE
    };

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const range = Number(e.target.value);
        console.log('save range', range, typeof range);
        this.setState({
            range: range
        });
    }

    private onSave = () => {
        const { vocabulary } = this.props

        console.log('you save settings', this.state.range);
        console.log(vocabulary);

        const newVocabulary = vocabulary;
        const wordsToLearn = [];

        for (let i = 0; i < this.state.range; i++) {
            const rand = Math.floor(Math.random() * newVocabulary.length);
            console.log('рандомная цифра: ', rand);
            wordsToLearn.push(newVocabulary[rand]);
            console.log(`рандомное слово: ${newVocabulary[rand]} и тип равен: ${typeof newVocabulary[rand]}`);
            newVocabulary.splice(rand, 1);
            console.log(`обновленный основной массив равен: ${newVocabulary}`);
        }

        console.log(wordsToLearn, newVocabulary);

        if(wordsToLearn) {
            this.props.addWordToVocabulary(wordsToLearn);
            this.props.filterVocabulary(newVocabulary);
        }

        this.setState({
            range: INITIAL_RANGE
        })
    }

    render() {
        const { range } = this.state;

        return (
            <div>
                <div>
                    <p>{range}</p>
                    <input onChange={this.handleChange}
                        value={range} 
                        type="range" 
                        min='1' 
                        max='12' 
                        step='1'/>
                </div>
                <button onClick={this.onSave}>SAVE</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    vocabulary: state.vocabulary.vocabulary
});

export default connect(mapStateToProps, {filterVocabulary, addWordToVocabulary})(Settings);