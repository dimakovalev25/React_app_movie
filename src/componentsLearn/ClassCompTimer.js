import React from "react";

class ClassCompTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            isRun: false,
            rememberSec: true
        }
    }

    componentDidMount() {
        const sec = +localStorage.getItem('second');
        this.setState({seconds: sec})
    }

    launchTimer = () => {

        if(!this.state.isRun) {
            this.timerId = setInterval(() => {
                this.setState(prev => ({seconds: prev.seconds + 1}))
            }, 1000)
        }
    }

    stopTimer = () => {
        // console.log('stop')
        const {seconds, rememberSec } = this.state;
        localStorage.setItem('rememberSec', rememberSec);
        localStorage.setItem('second', seconds);
        clearInterval(this.timerId)
    }

    render() {
        const style = {margin: ' 0 0.5rem'}
        return (

            <div>
                <span style={style}>{this.state.seconds}</span>
                <button onClick={this.launchTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>

            </div>

        )
    }
}

export default ClassCompTimer;