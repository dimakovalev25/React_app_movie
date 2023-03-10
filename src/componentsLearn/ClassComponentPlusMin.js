import React from "react";

class ClassComponentPlusMin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isShow: false,
        }
    }

    add = () => {
        // console.log('add')
        this.setState((prev) => ({ count: prev.count + 1, isShow: false}))
    }

    min = () => {
        // console.log('add')
        this.setState({
            count: this.state.count - 1,
            isShow: false
        })
    }

    reset = () => {
        // console.log('add')
        this.setState({
            count: this.state.count * 0,
            isShow: true

        })
    }

    render() {
        const style = {margin: '0 0.44rem', display: 'inline-block', color: 'red'}
        return (
            <>
                <button onClick={this.add}>+</button>
                <span style={{margin: '0 0.44rem'}}>{this.state.count}</span>
                <button onClick={() => this.setState({count: this.state.count-1})}>-</button>
                <button style={style} onClick={this.reset}>reset</button>
            </>

        )
    }
}

export default ClassComponentPlusMin;