import {Component} from "react";
import Movies from "../components/Movies";
import Prelouder from "../components/Prelouder";
import Search from "../components/Search";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=81b708e8&s=terminator`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search }))
            .catch(err => console.log(err))

    }


    updateNameMovie = (name, e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=81b708e8&s=${name}`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search }))
            .catch(err => console.log(err))

    }


    render() {
        const {movies} = this.state;

        return (
            <div className={'container content indigo lighten-5'}>

                <Search updateNameMovie={this.updateNameMovie}/>
                {this.state.movies.length ?
                <Movies updateNameMovie={this.updateNameMovie} movies={this.state.movies}/> :
                <Prelouder/>
                }
            </div>
        )
    }
}

export default Main;