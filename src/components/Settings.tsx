import React, { Component } from 'react';

import { INITIAL_RANGE } from '../constants/constants';

interface SettingsState {
    range: number;
};

class Settings extends Component<{}, SettingsState> {

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
        console.log('you save settings', this.state.range);
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

export default Settings;