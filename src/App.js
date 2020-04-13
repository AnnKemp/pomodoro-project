import React from 'react';
import './App.css';

/*clicked(e) { // vind dit interessante code, momenteel nog niet nodig
    setState({
            input: e.target.value,
            userAge: ‘’
});*/

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minutes:20, timerID:'', timer:false};

        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.sum = this.sum.bind(this);
        this.minus= this.minus.bind(this);
    }
    componentDidMount() { // method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({
            timer:false
        });
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    stop() {
        clearInterval(this.timerID);
        this.setState({
            timer:true
        });
    }
    start() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({
            timer:false
        });
    }
    reset() {
        this.setState({
            minutes:20, timer:false
        });
    }
    sum() {
        const pluss=(this.state.minutes)+1;
        this.setState({
            minutes: pluss
        });
    }
    minus() {
        const minun=(this.state.minutes)-1;
        this.setState({
            minutes: minun
        });
    }
    tick() {
        const min=(this.state.minutes)-1;
        this.setState({
            minutes: min
        });
    }
    render() {
        const Start =<button onClick={this.start}>Start</button>;
        const Stop = <button onClick={this.stop}>Stop</button>;
        const Reset = <button onClick={this.reset}>Reset</button>;
        const Plus = <button onClick={this.sum}>+</button>
        const Min = <button onClick={this.minus}>-</button>;

            if (this.state.timer==true) {
                return (
                    <div>
                    <h1>Countdown:</h1>
                    <h2>{this.state.minutes}</h2>

                        {Start}{Plus}{Min}
                    </div>
                );
            } else {
                return (
                    <div>
            <h1>Countdown:</h1>
            <h2>{this.state.minutes}</h2>

                        {Stop}{Reset}
                    </div>
                );}
            if(this.state.minutes<=4){
                return(
                    <div>
                        {window.open(' ','height=200,width=400,scrollbars=no')}


                    </div>
                );
            }
    }
}
function App() {
  return (
    <div className="App">
        <Timer />
    </div>
  );
}
export default App;

