import React from 'react';
import './App.css';
import './modal_box.css'

/*clicked(e) { // in de plaats van clicked zou ik 'het lopend event' moeten opvangen
    setState({  // zou getState bestaan
            input: e.target.value, // en dan ipv input ...
            userAge: ‘’ // zonder die userAge
});*/

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minutes:20, timerID:'', timer:false};

        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.startover = this.startover.bind(this);
        this.reset = this.reset.bind(this);
        this.sum = this.sum.bind(this);
        this.minus= this.minus.bind(this);
        this.close= this.close.bind(this);
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
    startover() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({
            minutes:20, timer:false
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
    close(){
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
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

                        {Start}<br /><br />{Plus}{Min}

                        { (this.state.minutes) <= 4 &&
                            <section id="myModal" style={{display:"block"}} className="modal" onClick={this.close}>
                            <div className="modal-content">
                            <span className="close" onClick={this.close}>&times;</span>
                            <p>take a break</p>
                            <button onClick={this.startover}>Start over</button>
                            </div>
                            </section>
                        }
                    </div>
                );
            } else {
                return (
                    <div>
            <h1>Countdown:</h1>
            <h2>{this.state.minutes}</h2>

                        {Reset}<br /><br />{Stop}

                        { (this.state.minutes) <= 4 &&
                        <section id="myModal" style={{display:"block"}} className="modal" onClick={this.close}>
                            <div className="modal-content">
                                <span className="close" onClick={this.close}>&times;</span>
                                <p>take a break</p>
                                <button onClick={this.startover}>Start over</button>
                            </div>
                        </section>
                        }
                    </div>
                );}
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

