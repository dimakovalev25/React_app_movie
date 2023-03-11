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
        const {updateNameMovie, updateType} = this.props
        const search = this.state.search

        return (
            <form >
                <div className={'container indigo lighten-5'}>
                    <div >
                        <div className="input-field col s3">
                            <h8 style={{color: '#1a237e'}}>Enter name movie and press ENTER</h8>
                            <input
                                onKeyDown={this.handleKey}
                                onChange={this.formSearch}
                                value={this.state.search}
                                id="first_name2"
                                type="text"
                                className="validate indigo lighten-5"/>
                            {/*<label*/}
                            {/*    className="active"*/}
                            {/*    style={{color: '#1a237e'}}*/}
                            {/*    htmlFor="first_name2">Enter name movie and press ENTER</label>*/}
                            <h8 style={{color: '#1a237e'}}>Choose type</h8>
                            <button
                                onClick={(e) => updateType('movie', e)}
                                className="btn waves-effect waves-light  indigo darken-4 search-button"
                                name="movie">movie
                            </button>
                            <button
                                onClick={(e) => updateType('series', e)}
                                className="btn waves-effect waves-light  indigo darken-4 search-button"
                                name="series">series
                            </button>
                            <button
                                onClick={(e) => updateType('episode', e)}
                                className="btn waves-effect waves-light  indigo darken-4 search-button"
                                name="episode">episode
                            </button>
                            <></>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search;