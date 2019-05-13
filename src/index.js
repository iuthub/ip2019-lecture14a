import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from './components/Greetings'
import Timer from './components/Timer'
import CountdownTimer from "./components/CountdownTimer";
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoApp from "./components/ToDoApp/ToDoApp";


const user = {
    name: 'Sarvar',
    title: 'Dr'
};


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            secondsElapsed: 0,
            isStarted: false
        }
    }

    tick() {
        //mutating the state - which is forbidden. State is immutable
        // this.state.secondsElapsed+=1

        this.setState({
            secondsElapsed: this.state.secondsElapsed+1
        })
    }

    handleStart() {
        const isStarted= !this.state.isStarted;
        if (isStarted) {
            this.timerID=setInterval(()=>this.tick(), 1000)
        } else {
            clearInterval(this.timerID);
        }

        this.setState({
            isStarted: isStarted
        });
    }


    render() {
        const secondsElapsed=this.state.secondsElapsed;
        const isStarted=this.state.isStarted;


        return (
            <div className='container'>
                <div className="row">
                    <h1>{this.props.title}</h1>
                    <Greetings user={user}>
                        <span>Some additional information</span>
                    </Greetings>
                </div>
                <div className="row">
                    <div className="col">
                        <Timer
                            secondsElapsed={secondsElapsed}
                            isStarted={isStarted}
                            onStart={()=>this.handleStart()}
                        />
                    </div>
                    <div className="col">
                        <CountdownTimer secondsRemaining={100-secondsElapsed}/>
                    </div>
                </div>
                <div className="row">
                    <ToDoApp/>
                </div>


            </div>
        )
    }
}

ReactDOM.render(<App title={"First App"} />, document.getElementById('root'));
