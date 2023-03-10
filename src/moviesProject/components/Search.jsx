import {Component} from "react";


class Search extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        search: ''
    }

    formSearch = (e) => {
       this.setState({search: e.target.value})
    }

    handleKey = (e) => {
        if(e.key === 'Enter'){
            this.props.updateNameMovie(this.state.search, e)
            this.setState({search: ''})
        }
    }


    render() {
        const {updateNameMovie} = this.props
        const search = this.state.search

        return (
            <form >
                <div className={'container indigo lighten-5'}>
                    <div >
                        <div className="input-field col s6">

                            <input
                                onKeyDown={this.handleKey}
                                onChange={this.formSearch}
                                value={this.state.search}
                                id="first_name2"
                                type="text"
                                className="validate indigo lighten-5"/>
                            <label
                                className="active"
                                style={{color: '#1a237e'}}
                                htmlFor="first_name2">Enter name movie and press ENTER</label>
                            {/*<button*/}
                            {/*    onClick={(e) => updateNameMovie(search, e)} className="btn waves-effect waves-light  indigo darken-4"*/}
                            {/*    type="submit"*/}
                            {/*    name="action">Search*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search;