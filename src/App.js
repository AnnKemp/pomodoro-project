import React from 'react';
import './App.css';
// de knoppen hieronder voor later in de if/else constructie om als constanten aan te roepen om dan de ene te tonen en dan de andere etc. zie opdracht


//const Stop = <button onClick={this.stop}>Stop</button>;
//const Reset = <button onClick={this.reset}>Reset</button>;
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
        this.state = {minutes:20, timerID:'', timer:false};

        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.sum = this.sum.bind(this);
        this.minus= this.minus.bind(this);
    }
    const Start ='<button onClick='+this.start+'>Start</button>'; // hier herkent ie this maar werkt ie ook nog niet fatsoenlijk

    componentDidMount() { // method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.timer=true;
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    stop() {
        clearInterval(this.timerID);
        this.timer=false; // misschien beter this.state.timer ?? nog testen
    }
    start() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.timer=true; // misschien beter this.state.timer ?? nog testen
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
        return (
            <div>
                <h1>Countdown:</h1>
                <h2>{this.state.minutes}</h2>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.sum}>+</button>
                <button onClick={this.minus}>-</button>

                {//(this.state.timer===false)?Start Plus Min:Reset Stop}
                /*  // bovenstaande tonen van de knoppen (nu nog zoeken hoe ik mijn constanten moet formuleren zodat ze geen errors geven bovenaan  // nog testen met of zonder state ertussen // nog een oplossing zoeken voor meerdere constanten naast elkaar hier,dus iets ipv die spaties want die geven syntax errors // ben momenteel aan het testen met de start-button, als die werkt is het simpel toepassen op de rest
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

