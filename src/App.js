import React from 'react';
import './App.css';
// de knoppen hieronder voor later in de if/else constructie om als constanten aan te roepen om dan de ene te tonen en dan de andere etc. zie opdracht

//const Start = <button onClick={this.start}>Start</button>;
//const Stop = <button onClick={this.stop}>Stop</button>;
//const Reset=<button onClick={this.reset}>Reset</button>;
//const Plus = <button onClick={this.sum}>+</button>
//const Min = <button onClick={this.minus}>-</button>;

// timer=false; // momenteel nog niet nodig
/*clicked(e) { // vind dit interessante code, momenteel nog niet nodig
    setState({
            input: e.target.value,
            userAge: ‘’
});*/

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minutes:20, timerID:''};

        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.sum = this.sum.bind(this);
        this.minus= this.minus(this);
    }
    componentDidMount() { // method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    stop() {
        clearInterval(this.timerID);
    }
    start() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    reset() {
        this.setState({
            minutes:20
        });
    }
    sum() {
        const pluss=(this.state.minutes)+1;
        this.setState({
            minutes: pluss
        });
    }
    minus() { // en dit werkt dus niet! nakijken waarom, momenteel nog niet gevonden,hoop op  typo
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
        return (
            <div>
                <h1>Countdown:</h1>
                <h2>{this.state.minutes}</h2>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.sum}>+</button>
                <button onClick={this.minus}>-</button>


                {/* //verkorte if else constructie om te bepalen welke knop (zie de constanten) wanneer wordt getoont
                Dit gaat later bovenstaande knoppen vervangen
         { (timer==true)
            ? stop:start
            (start==true)
            ? reset
            : buttonThree}
            // hieronder nog een interessante knop-notatie die ik misschien kan gebruiken om de start knop in een reset knop te veranderen of zoiets
            */}
            </div>
        );
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

