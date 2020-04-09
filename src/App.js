import React, {useEffect} from 'react';
import './App.css';

let timer=false;
let minutes=20;

const start = <button onClick="">Start</button>;
const stop = <button onClick="">Stop</button>;
const plus = <button onClick={sum(minutes)}>+</button>;
const min = <button onClick={minus(minutes)}>-</button>;

// niet met die minutes+=1 optellen of aftrekken, states hiervoor gebruiken, de functies hieronder nog aanpassen/veranderen
function sum(minutes) {
    minutes+=1;
    return minutes;
}function minus(minutes) {
    minutes-=1;
    return minutes;
}
/*clicked(e) {
    setState({
            input: e.target.value,
            userAge: ‘’
});*/
// deze clock als basis van mijne count down gebruiken
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Count down</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
function App() {
  return (
    <div className="App">

        {/*  { (timer==true)
            ? stop:start
            (start==true)
            ? reset
            : buttonThree}*/}
    <br />
        <Clock />
      <button onClick={() => this.setState({ liked: true })}>
        Start
      </button>

    </div>
  );
}
export default App;

