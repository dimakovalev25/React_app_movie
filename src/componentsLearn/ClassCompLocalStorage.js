import React from "react";

class ClassCompLocalStorage extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            rememberMe: false
        }
    }

    handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
        console.log(this.state)
    };



    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({ user, rememberMe });
    }


    render() {

        return (

            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </form>

            </div>

        )
    }
}

export default ClassCompLocalStorage;