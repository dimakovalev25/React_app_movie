import React from "react";

class ClassCompGetUserWithJson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            comments: []
        }
    }

    componentDidMount() {
        // console.log('did mount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({posts: data}))
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err))

        this.timer = setInterval(() => {
            console.log('setInterval')
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
                // .then(data => this.setState((prev) => ({ posts: prev.posts.push(data)})))
                .then(data => console.log(data))


        }, 5000000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {

        const data = this.state.posts;
        console.log(data)
        return (
            <>
                {this.state.loading ? <h3>Loading...</h3>
                    :  <h3>{this.state.posts.length} persons was loaded!</h3>}

                {this.state.loading ? <h3>Loading...</h3>
                    : data.map(item  => <div>{item.name}:  {item.email}</div>)

                }
                <button onClick={() => this.props.onHandleSmth()}>DTN</button>
            </>

        )
    }
}

export default ClassCompGetUserWithJson;