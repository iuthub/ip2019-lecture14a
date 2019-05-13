import React from 'react';
export default class CountdownTimer extends React.Component {
    render(){
        return (
            <div>
                <h3>Seconds Remaining: {this.props.secondsRemaining}</h3>
            </div>
        )
    }
}