import React, { Component } from 'react';

interface SettingsState {
    range: number;
};

class Settings extends Component<{}, SettingsState> {

    state: SettingsState = {
        range: 1
    };

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);
        console.log('save range',value, typeof value);
        this.setState({
            range: value
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