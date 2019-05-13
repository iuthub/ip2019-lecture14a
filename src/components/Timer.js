import React from 'react';

export default class Timer extends React.Component {

    componentDidMount(){
        //this.timerID=setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    render() {
        const sElapsed = this.props.secondsElapsed;
        const isStarted = this.props.isStarted;
        const onStart = this.props.onStart;

        return (
            <div>
                <h3>Seconds Elapsed: {sElapsed}</h3>
                <button className='btn btn-primary' onClick={()=>onStart()}>
                    {isStarted?'Stop':'Start'}
                </button>
            </div>
        )
    }
}